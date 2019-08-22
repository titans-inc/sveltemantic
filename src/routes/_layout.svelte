<script>
    import { stores } from '@sapper/app'
	const { preloading, page, session } = stores()
    import Nav from '../components/Nav.svelte'
    import 'fomantic-ui-css/semantic.min.css'
    import 'prismjs/themes/prism.css'

    export let segment
</script>

<div class='pusher'>
    <div class="full height">
        <Nav segment={$page.path.split('/').pop()}/>
        <div class="article">
            <slot></slot>
        </div>
    </div>
</div>