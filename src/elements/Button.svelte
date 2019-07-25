<script>
    export let active = false;
    export let emphasis = '';
    export let color = '';
</script>

<button class="ui button" class:active={active}>
    <slot />
</button>