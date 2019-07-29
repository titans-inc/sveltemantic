<script>
    export let direction = 'vertical';
    export let inverted = false;
    export let fitted = false;
    export let hidden = false;
    export let section = false;
    export let clearing = false;
</script>


<div class="ui {direction} divider" class:inverted class:fitted class:hidden class:section class:clearing>
    <slot></slot>
</div>
