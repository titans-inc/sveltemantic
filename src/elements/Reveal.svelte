<script>
    export let animation = '';
    export let direction = '';
    export let size = '';
    export let instant = false;
    export let circular = false;
    export let active = false;
    export let disabled = false;
</script>

{#if circular}
    <div class="ui {animation} {size} {direction} circular image reveal" class:active calss:disabled class:instant>
        <slot></slot>
    </div>
{:else}
    <div class="ui {animation} {size} {direction} reveal" class:active calss:disabled class:instant>
        <div class="visible content">
            <slot name="visible"></slot>
        </div>
        <div class="hidden content">
            <slot name="hidden"></slot>
        </div>
    </div>
{/if}