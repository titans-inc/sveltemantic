<div class="ui {className} placeholder" class:fluid class:inverted>
    {#if header}
    <div class="header" class:image>
        <slot name="header">
            {#each iterable(header) as line}
                <div class="{line} line"></div>
            {/each}
        </slot>
    </div>
    {/if}
    <slot>
        {#if image && !header}
            <div class="image {image}"></div>
        {:else if paragraphs && lines}
            {#each iterable(paragraphs) as para}
                <div class="paragraph">
                    {#each iterable(lines) as line}
                        <div class="{line} line"></div>
                    {/each}
                </div>
            {/each}
        {:else if paragraphs}
            {#each iterable(paragraphs) as para}
                <div class="paragraph">
                    {#each iterable(para) as line}
                        <div class="{line} line"></div>
                    {/each}
                </div>
            {/each}
        {:else if lines}
            {#each iterable(lines) as line}
                <div class="{line} line"></div>
            {/each}
        {/if}
    </slot>
</div>

<script>
    let className = '';
    export { className as class };

    export let fluid = false;
    export let inverted = false;
    export let header = false;
    export let image = '';
    export let lines = '';
    export let paragraphs = []

    function iterable(t) {
        if (Array.isArray(t)) return t;
        else {
            t = parseInt(t)
            return Array(isNaN(t) ? 1 : t).fill('');
        }
    }
</script>

