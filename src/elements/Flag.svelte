<script>
    export let code = '';
    export let name = '';
    export let alias = '';

    function normalizedFlag() {
        if (code && code.length === 2) {
            return code;
        } else if (name) {
            return name.toLowerCase().replace('.', '');
        } else if (alias) {
            return alias.toLowerCase();
        } else {
            return 'error';
        }
    }
</script>

<style>
    i.flag.error:not(.icon)::before {
        content: '\f0000';
    }
</style>

<i class="{normalizedFlag()} flag"></i>