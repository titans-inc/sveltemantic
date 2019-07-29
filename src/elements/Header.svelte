<script>
    export let page = '';
    export let attached = '';
    export let block = '';
    export let color = '';
    export let content = '';
    export let disabled = '';
    export let dividing = '';
    export let floated = '';
    export let icon = false;
    export let image = '';
    export let inverted = false;
    export let size = '';
    export let sub = '';
    export let subheader;
    export let alignment = '';

    $: aligned = ['left', 'center', 'right'].indexOf(alignment) !== -1 ? `${alignment} aligned` : alignment
</script>

{#if page === 'h1'}
    <h1>
        <slot></slot>
    </h1>
{:else}
    <div class="ui {content} {size} {color} {aligned} {attached} header" class:icon class:aligned class:block class:attached class:disabled>
    </div>
{/if}