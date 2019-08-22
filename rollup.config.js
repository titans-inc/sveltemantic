import copy from 'rollup-plugin-copy'

const build = process.env.BUILD ? process.env.BUILD : false
const tasks = []

if (!build || build === 'package') {
    tasks.push({
        input: 'src/index.js',
        output: [
            {
                file: 'index.mjs',
                format: 'esm'
            },
            {
                file: 'index.js',
                format: 'cjs'
            }
        ],
        plugins: [
            copy({
                targets: [
                    {
                        dest: './',
                        src: ['src/*', '!src/index.js']
                    }
                ]
            })
        ]
    })
}

export default tasks
