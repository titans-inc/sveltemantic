const ghPages = require('gh-pages')

ghPages.publish('__sapper__/export', (err) => {
    throw err
})
