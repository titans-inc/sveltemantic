import fs from 'fs'
import replace from 'rollup-plugin-replace'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default [
    {
        input: 'src/index.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'dist/bundle.js'
        },
        plugins: [
            svelte({
                dev: !production,
                css: css => {
                    css.write('dist/bundle.css')
                }
            }),
            resolve({
                browser: true,
                dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
            }),
            commonjs()
        ],
        watch: {
            clearScreen: false
        }
    }
]
