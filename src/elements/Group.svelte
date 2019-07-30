<script>
    export let size = '';
    export let direction = '';
    export let color = '';
    export let attached = '';
    export let stacked = false;
    export let horizontal = false;
    export let segments = false;
    export let basic = false;
    export let compact = false;
    export let images = false;
    export let icon = false;
    export let tag = false;
    export let piled = false;
    export let raised = false;
    export let circular = false;
    export let buttons = false;
    export let labels = false;
    export let icons = false;
</script>

{#if icons}
    <i class="{size} icons"></i>
{:else if segments}
    <div class="ui segments" class:basic class:stacked class:horizontal class:piled class:raised
    class:compact>
        <slot></slot>
    </div>
{:else}
    <div class="ui {size} {direction} {attached} {color}" class:images class:icon class:buttons 
    class:labels={!buttons} class:labeled={buttons && labels} class:basic class:attached
    class:tag class:circular>
        <slot></slot>
    </div>
{/if}