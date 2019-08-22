import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy-assets'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = Boolean(process.env.SAPPER_LEGACY_BUILD)

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && (/[/\\]@sapper[/\\]/u).test(warning.message)) || onwarn(warning)
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/')

export default {
    client: {
        input: config.client.input(),
        onwarn,
        output: config.client.output(),
        plugins: [
            replace({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            svelte({
                dev,
                emitCss: true,
                hydratable: true
            }),
            resolve({
                browser: true,
                dedupe,
                extensions: ['.js', '.mjs', '.html', '.svelte']
            }),
            copy({
                assets: ['src/themes']
            }),
            commonjs(),

            legacy && babel({
                exclude: ['node_modules/@babel/**'],
                extensions: ['.js', '.mjs', '.html', '.svelte'],
                plugins: [
                    '@babel/plugin-syntax-dynamic-import',
                    [
                        '@babel/plugin-transform-runtime', {
                            useESModules: true
                        }
                    ]
                ],
                presets: [
                    [
                        '@babel/preset-env', {
                            targets: '> 0.25%, not dead'
                        }
                    ]
                ],
                runtimeHelpers: true
            }),

            !dev && terser({
                module: true
            })
        ]
    },

    server: {
        // eslint-disable-next-line global-require
        external: Object.keys(pkg.dependencies).concat(require('module').builtinModules || Object.keys(process.binding('natives'))),
        input: config.server.input(),
        onwarn,
        output: config.server.output(),
        plugins: [
            replace({
                'process.browser': false,
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            svelte({
                dev,
                generate: 'ssr'
            }),
            resolve({
                dedupe,
                extensions: ['.js', '.mjs', '.html', '.svelte']
            }),
            commonjs()
        ]
    },

    serviceworker: {
        input: config.serviceworker.input(),
        onwarn,
        output: config.serviceworker.output(),
        plugins: [
            resolve(),
            replace({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            commonjs(),
            !dev && terser()
        ]
    }
}
