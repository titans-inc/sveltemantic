<script>
    import { afterUpdate } from 'svelte';
    import { listen } from 'svelte/internal';

    import Icon from './Icon.svelte';

    export let active = false;
    export let emphasis = '';
    export let color = '';
    export let animation = '';
    export let loading = '';
    export let size = '';
    export let inverted = false;
    export let basic = false;
    export let tertiary = false;
    export let compact = false;
    export let toggle = '';
    export let fluid = false;
    export let floated = '';
    export let attached = '';
    export let labeled = '';
    export let positive = false;
    export let negative = false;
    export let circular = false;
    export let icon = '';

    let _unlistener = null;
    let _el = null;

    function toggleState(e) {
        if(toggle) {
            active = !active;
        }
    }

    afterUpdate(() => {
        if((typeof toggle === 'string' || toggle instanceof String) && toggle.startsWith('on:')) {
            _unlistener = !_unlistener ? _unlistener : _unlistener()
            _unlistener = listen(_el, toggle.substring(3), toggleState)
        }
    })
</script>

{#if animation}
    <div class="ui animated {animation} {color} {size} {floated} {attached} button" tabindex="0"  
    class:active class:tertiary class:basic class:inverted class:compact class:toggle class:fluid
    class:positive class:negative class:circular class:icon class:floated class:attached bind:this={_el}>
        <div class="visible content">
            <slot name="visible">No visible content provided</slot>
        </div>
        <div class="hidden content">
            <slot name="hidden">No hidden content provided</slot>
        </div>
    </div>
{:else if labeled}
    <div class="ui labeled {color} {size} {floated} {labeled} {attached} button" tabindex="0"  
    class:active class:tertiary class:basic class:inverted class:compact class:toggle class:fluid
    class:positive class:negative class:circular class:icon class:floated class:attached bind:this={_el}>
        <slot></slot>
    </div>
{:else}
    <button class="ui {emphasis} {color} {loading} {size} {floated} {attached} button" 
    class:active class:tertiary class:basic class:inverted class:loading class:compact class:toggle class:fluid
    class:positive class:negative class:circular class:icon class:floated class:attached bind:this={_el}>
        {#if loading}
            Loading
        {:else}
            <slot>
                {#if icon}
                    <Icon name={icon} />
                {/if}
            </slot>
        {/if}
    </button>
{/if}