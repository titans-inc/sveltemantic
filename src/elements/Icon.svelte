<script>
    export let name = ''
</script>

<style>
    i.icon.error::before {
        content: '\f0000'
    }
</style>

<i class="{name ? name.toLowerCase() : 'error'} icon"></i>