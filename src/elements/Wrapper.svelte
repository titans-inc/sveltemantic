<script>
    export let type = '';
    export let as = '';
</script>

{#if as === 'p'}
    <p class="{type}">
        <slot></slot>
    </p>
{:else if as === 'span'}
    <span class="{type}">
        <slot></slot>
    </span>
{:else if as === 'article'}
    <article class="{type}">
        <slot></slot>
    </article>
{:else if as === 'section'}
    <section class="{type}">
        <slot></slot>
    </section>
{:else}
    <div class="{type}">
        <slot></slot>
    </div>
{/if}
