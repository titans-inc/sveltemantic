<script>
    export let color = '';
    export let name = '';
    export let corner = '';
    export let size = '';
    export let flipped = '';
    export let rotated = '';
    export let bordered = false;
    export let circular = false;
    export let disabled = false;
    export let inverted = false;
    export let loading = false;
    export let fitted = false;
    export let link = false;
</script>

<style>
    i.icon.error::before {
        content: '\f0000'
    }
</style>

<i class="{name ? name.toLowerCase() : 'error'} {size} {color} {flipped} {rotated} {corner} icon" class:bordered class:circular
class:disabled class:inverted class:loading class:fitted class:link class:flipped class:rotated class:corner></i>