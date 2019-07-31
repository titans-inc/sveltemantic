<script>
    import menus from './_menu.js';
    export let segment;
</script>

<div class="toc">
    <div class="ui vertical inverted menu">
        <div class="item" class:active={segment === undefined}>
            <a class="ui logo icon image" href="./">
                <img src="logo.png" alt="SvelteMantic Logo">
            </a>
            <a href="/"><b>UI Docs</b></a>
        </div>

        <a class="item" rel='prefetch' href="getting-started" class:active={segment === 'getting-started'}>
            <b>Getting Started</b>
        </a>

        {#each menus as menu}

        <div class="item">
            <div class="header">{ menu.title }</div>
            <div class="menu">
                {#each menu.submenus as submenu}

                <a class="item" rel='prefetch' href="{menu.title.toLowerCase()}/{submenu.toLowerCase()}" class:active={segment === submenu.toLowerCase()}>
                    {submenu}
                </a>

                {/each}
            </div>
        </div>

        {/each}
    </div>
</div>