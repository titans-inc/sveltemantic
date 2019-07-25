import fs from 'fs'
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
const build = process.env.BUILD

let tasks = []

if(build === 'all' || build === 'public') {
    tasks.push(
        {
            input: 'src/index.js',
            output: {
                sourcemap: true,
                format: 'iife',
                name: 'app',
                file: 'public/bundle.js'
            },
            plugins: [
                svelte({
                    dev: !production,
                    css: css => {
                        css.write('public/bundle.css')
                    }
                }),
                copy({
                    copyOnce: true,
                    targets: [
                        { src: 'node_modules/fomantic-ui-css/themes', dest: 'public' }
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
                production && terser()
            ],
            watch: {
                clearScreen: false
            }
        }
    )
}

export default tasks
