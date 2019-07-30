<script>
    import { smaligned } from './lib/util';

    export let fluid = false;
    export let text = false;
    export let alignment = '';

    $: aligned = smaligned(alignment)
</script>

<div class="ui {aligned} container" class:fluid class:text>
    <slot>No content is provided</slot>
</div>