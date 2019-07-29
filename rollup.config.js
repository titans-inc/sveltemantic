import fs from 'fs'
import path from 'path'
import ghPages from 'gh-pages'
import replace from 'rollup-plugin-replace'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import css from 'rollup-plugin-css-only'
import sveltedoc from 'rollup-plugin-sveltedoc'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH
const build = process.env.BUILD ? process.env.BUILD : false
const external = id => id.startsWith('svelte/')
const tasks = []

if (!build || build === 'public') {
    tasks.push({
        input: 'src/docs/index.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/bundle.js'
        },
        plugins: [
            replace({
                __VERSION__: pkg.version,
                __PRODUCTION__: production
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
                    { src: 'src/docs', dest: 'public' },
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
                        ghPages.publish('public', (err) => {
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
            .filter(dir => dir !== 'docs' && fs.statSync(`src/${dir}`).isDirectory())
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
                external,
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

if (!build || build === 'docs') {
    const getFilePaths = (folderPath) => {
        const entryPaths = fs.readdirSync(folderPath).map(entry => path.join(folderPath, entry))
        const filePaths = entryPaths.filter(entryPath => fs.statSync(entryPath).isFile())
        const dirPaths = entryPaths.filter(entryPath => !filePaths.includes(entryPath))
        const dirFiles = dirPaths.reduce((prev, curr) => prev.concat(getFilePaths(curr)), [])
        return [...filePaths, ...dirFiles]
    }

    const group = (file) => path.basename(path.dirname(file))
    const component = (file) => path.basename(file, '.svelte').toLowerCase()

    tasks.push(
        ...getFilePaths('src')
            .filter(file => !file.endsWith('SvelteMantic.svelte') && !file.includes('docs') && file.endsWith('.svelte'))
            .map(file => ({
                input: file,
                output: {
                    file: `public/docs/${group(file)}/${component(file)}/${component(file)}.js`,
                    format: 'esm'
                },
                plugins: [
                    sveltedoc()
                ]
            }))
    )
}

export default tasks
