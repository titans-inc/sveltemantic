import fs from 'fs'
import ghPages from 'gh-pages'
import replace from 'rollup-plugin-replace'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const build = process.env.BUILD ? process.env.BUILD : false

const tasks = []

if (!build || build === 'public') {
    tasks.push({
        input: 'src/index.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/bundle.js'
        },
        plugins: [
            replace({
                __VERSION__: pkg.version
            }),
            svelte({
                dev: !production,
                css: css => {
                    css.write('public/bundle.css')
                }
            }),
            copy({
                copyOnce: true,
                targets: [
                    { src: 'node_modules/fomantic-ui-css/themes', dest: 'public' },
                    { src: 'logo.png', dest: 'public' },
                    { src: 'README.md', dest: 'public' }
                ]
            }),
            css({
                output: 'public/fomantic.css'
            }),
            resolve({
                browser: true,
                dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
            }),
            commonjs(),
            !production && livereload('public'),
            production && terser(),
            {
                writeBundle (bundle) {
                    if (production) {
                        ghPages.publish('public', function (err) {
                            if (err) {
                                console.error(err)
                            }
                        })
                    }
                }
            }
        ],
        watch: {
            clearScreen: false
        }
    })
}

if (!build || build === 'package') {
    tasks.push(
        ...fs.readdirSync('src')
            .filter(dir => fs.statSync(`src/${dir}`).isDirectory())
            .map(dir => ({
                input: `src/${dir}/index.js`,
                output: [
                    {
                        file: `${dir}/index.mjs`,
                        format: 'esm'
                    },
                    {
                        file: `${dir}/index.js`,
                        format: 'cjs'
                    }
                ],
                plugins: [
                    svelte(),
                    resolve(),
                    commonjs(),
                    production && terser(),
                    {
                        writeBundle (bundle) {
                            fs.writeFileSync(`${dir}/package.json`, JSON.stringify({
                                main: './index',
                                module: './index.mjs'
                            }, null, '  '))
                        }
                    }
                ]
            }))
    )
}

export default tasks
