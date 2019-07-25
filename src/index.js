import SvelteMantic from './SvelteMantic.svelte'

export const VERSION = '__VERSION__'

const sveltemantic = new SvelteMantic({
    target: document.body
})

export default sveltemantic
