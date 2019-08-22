<div
    class="example"
    class:another
>
    {#if !another}
    <h4 id={anchor} class="ui header">
        <a href="#{anchor}">
            <i class="fitted small linkify icon"></i>
            {title}
        </a>
    </h4>
    {/if}

    <i class="fitted icon code"></i>
    <p>{description}</p>
    <div class="html {show ? 'ui top attached segment' : ''}">
        {@html html}
        <div class="ui top attached label">Example <i class="copy link icon" on:click={showExample}></i></div>
    </div>
    <div class="annotation transition" class:hidden={!show} class:visible={show}>
        <div class="ui instructive bottom attached segment">
            <pre>
                {@html Prism.highlight(html, Prism.languages.markup, 'markup')}
            </pre>
        </div>
    </div>
</div>

<style>
    .annotation.visible {
        display: block !important;
    }
</style>

<script>
    import Prism from 'prismjs'

    export let another = false
    export let title = ''
    export let description = ''
    export let html = ''
    let show = false

    function showExample() {
        show = true
    }

    $: anchor = title.toLowerCase().replace(/[\s]+/, '-')
</script>