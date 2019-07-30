<script>
    import { smfloated, smaligned } from './lib/util';

    export let color = '';
    export let loading = '';
    export let attached = '';
    export let padded = '';
    export let fitted = '';
    export let emphasis = '';
    export let float = '';
    export let alignment = '';
    export let placeholder = false;
    export let raised = false;
    export let stacked = false;
    export let piled = false;
    export let basic = false;
    export let vertical = false;
    export let disabled = false;
    export let inverted = false;
    export let compact = false;
    export let circular = false;
    export let clearing = false;

    $: floated = smfloated(float)
    $: aligned = smaligned(alignment)
</script>

<div class="ui {loading} {color} {attached} {emphasis} {padded} {fitted} {floated} {aligned} segment" class:placeholder 
class:raised class:stacked class:piled class:vertical class:disabled class:loading class:inverted class:attached 
class:padded class:fitted class:compact class:circular class:clearing class:basic>
    <slot></slot>
</div>