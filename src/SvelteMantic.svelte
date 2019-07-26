<script>
    import 'fomantic-ui-css/semantic.min.css'; 
    import { Button, Icon } from './elements';

    export let production = false
</script>

{#if production}
    <div class="ui active dimmer">
        <div class="ui text red large elastic inverted loader">Under Progress</div>
    </div>
{:else}
    <Button icon='cat' toggle='on:click'></Button>
{/if}