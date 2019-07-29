<script>
    export let size = '';
    export let direction = '';
    export let color = '';
    export let attached = '';
    export let basic = false;
    export let images = false;
    export let icon = false;
    export let tag = false;
    export let circular = false;
    export let buttons = false;
    export let labels = false;
    export let icons = false;
</script>

{#if icons}
    <i class="{size} icons"></i>
{:else}
    <div class="ui {size} {direction} {attached} {color}" class:images class:icon class:buttons 
    class:labels={!buttons} class:labeled={buttons && labels} class:basic class:attached
    class:tag class:circular>
        <slot></slot>
    </div>
{/if}