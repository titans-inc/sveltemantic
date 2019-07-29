import Docs from './Docs.svelte'

export const VERSION = '__VERSION__'

const sveltemantic = new Docs({
    target: document.body,
    props: {
        production: ('__PRODUCTION__' === 'true')
    }
})

export default sveltemantic
