<!-- TODO -->
<script>
    export let page = '';
</script>

{#if page === 'h1'}
    <h1>
        <slot></slot>
    </h1>
{:else}
    <div></div>
{/if}