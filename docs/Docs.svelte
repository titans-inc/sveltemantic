<script>
    import 'fomantic-ui-css/semantic.min.css'; 
    import Flag from './elements/flag/Flag.svelte';

    export let production = false

    let component = Flag
    let menu = {
        elements: {
            flag: Flag
        }
    }

     function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
</script>

{#if production}
    <div class="ui active dimmer">
        <div class="ui text red large elastic inverted loader">Under Construction</div>
    </div>
{:else}
    <div class="ui grid">
        <div class="four wide column">
            <div class="ui vertical menu inverted large fluid">
                {#each Object.entries(menu) as [group, val]}
                    <div class="item">
                        <div class="header">{toTitleCase(group)}</div>
                        <div class="menu">
                            {#each Object.entries(val) as [name, comp]}
                                <a on:click={() => component = comp } class="item">{toTitleCase(name)}</a>
                            {/each}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="twelve wide column">
            <svelte:component this={component}/>
        </div>
    </div>
{/if}