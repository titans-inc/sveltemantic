import fs from 'fs'
import path from 'path'
import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import copy from 'rollup-plugin-copy'
import sveltedoc from 'rollup-plugin-sveltedoc'

const production = !process.env.ROLLUP_WATCH
const build = process.env.BUILD ? process.env.BUILD : false
const external = id => id.startsWith('svelte/')
const tasks = []

if (!build || build === 'package') {
    tasks.push({
        input: `src/index.js`,
        output: [
            {
                file: `index.mjs`,
                format: 'esm'
            },
            {
                file: `index.js`,
                format: 'cjs'
            }
        ],
        //external,
        plugins: [
            copy({
                targets: [
                    {
                        src: ['src/*', '!src/index.js'],
                        dest: './'
                    }
                ]
            }),
            svelte(),
            resolve(),
            commonjs(),
            production && terser()
        ]
    })
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
