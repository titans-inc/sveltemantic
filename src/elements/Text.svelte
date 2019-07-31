<span
    use:useActions={use}
    use:forwardEvents
    class={classNames([
        'ui',
        color,
        size,
        { 'inverted': inverted },
        { 'disabled' : disabled },
        'text'
    ])}
    {...exclude($$props, ['use', 'class', 'inverted', 'disabled', 'size', 'color'])}
><slot></slot></span>

<script context="module">
    import classNames from 'classnames/dedupe'
    import {exclude, forwardEventsBuilder, useActions} from '../lib'
    import {current_component} from 'svelte/internal'
</script>

<script>
    export let use = [];
    let className = '';
    export {className as class};

    export let inverted = false;
    export let disabled = false;
    export let size = '';
    export let color = '';

    const forwardEvents = forwardEventsBuilder(current_component)
</script>