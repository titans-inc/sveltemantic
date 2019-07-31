const fs = require('fs-extra')
const path = require('path')

function copyFolderSync (from, to, exclude = []) {
    fs.mkdirSync(to, { recursive: true })
    fs.readdirSync(from).filter((f) => !exclude.includes(f))
        .forEach(element => {
            if (fs.lstatSync(path.join(from, element)).isFile()) {
                fs.copyFileSync(path.join(from, element), path.join(to, element))
            } else {
                copyFolderSync(path.join(from, element), path.join(to, element), exclude)
            }
        })
}

copyFolderSync('.', '__sapper__/export/src', ['node_modules', '__sapper__', 'LICENSE', 'README.md'])
fs.copyFileSync('LICENSE', '__sapper__/export/LICENSE')
fs.copyFileSync('README.md', '__sapper__/export/README.md')
