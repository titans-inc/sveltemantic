<script>
    export let fluid = false;
    export let inverted = false;
    export let header = false;
    export let image = '';
    export let lines = '';
    export let paragraphs = []

    function iterable(t) {
        if (Array.isArray(t)) return t;
        else return Array(t).fill('');
    }
</script>

<div class="ui placeholder" class:fluid class:inverted>
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
        {:else if Array.isArray(paragraphs) && paragraphs.length > 0}
            {#each paragraphs as para}
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