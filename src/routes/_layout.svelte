<script>
    import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();
    import Nav from '../components/Nav.svelte';
    import 'fomantic-ui-css/semantic.min.css';
    import { Wrapper } from 'sveltemantic/elements';

    export let segment;
</script>

<Wrapper type='pusher'>
    <div class="full height">
        <Nav segment={$page.path.split('/').pop()}/>
        <div class="article">
            <slot></slot>
        </div>
    </div>
</Wrapper>