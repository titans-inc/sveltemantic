<script>
    import 'fomantic-ui-css/semantic.min.css'; 
    import { Button, Icon, Flag, Text } from './elements';

    export let production = false
</script>

{#if production}
    <div class="ui active dimmer">
        <div class="ui text loader">Under Progress</div>
    </div>
{/if}