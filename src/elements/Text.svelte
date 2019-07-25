<script>
    import { onMount } from 'svelte';

    export let inverted = false;
    export let disabled = false;
    export let size = '';
    export let color = '';

    onMount(() => {
        if (inverted && !color) {
            console.warn('Inverted won\'t take effect without color property')
            inverted = false;
        }
    })
</script>

<span class="ui {color} {size} text" class:disabled class:inverted>
    <slot />
</span>