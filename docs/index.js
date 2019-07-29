import Docs from './Docs.svelte'

export const VERSION = '__VERSION__'

const sveltemantic = new Docs({
    target: document.body,
    props: {
        production: ('__PRODUCTION__' === 'true')
    },
    customElements: true
})

export default sveltemantic
