<script>
    export let inverted = false;
    export let disabled = false;
    export let size = '';
    export let color = '';
</script>

<span class="ui {color} {size} text" class:disabled class:inverted>
    <slot>No content provided</slot>
</span>