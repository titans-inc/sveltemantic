<script>
    export let fluid = false;
    export let text = false;
    export let alignment = '';

    $: aligned = ['left', 'center', 'right'].indexOf(alignment) !== -1 ? `${alignment} aligned` : alignment
</script>

<div class="ui {aligned} container" class:fluid class:text>
    <slot>No content is provided</slot>
</div>