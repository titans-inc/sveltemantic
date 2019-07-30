<script>
    export let link = '';
    export let active = false;
    export let disabled = false;
    export let completed = false;
</script>

{#if link}
    <a href={link} class="step" class:active class:disabled class:completed>
    </a>
{:else}
    <div class="step" class:active class:disabled class:completed>
    </div>
{/if}