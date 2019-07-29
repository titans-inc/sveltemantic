<script>
    export let direction = 'left';
    export let size = '';
    export let internal = false;
    export let dividing = false;
    export let attached = false;
    export let close = false;
    export let very = false;
</script>

<div class="ui {size} {direction} rail" class:internal class:dividing class:attached class:close class:very>
    <slot>No content provided</slot>
</div>