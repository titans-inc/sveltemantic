<svelte:head>
    <title>Text | Sveltemantic</title>
</svelte:head>

<Segment color='masthead' vertical>
    <Container>
        <div class="introduction">
            <Header page='h1'>
                Text

                <Header sub>A text is used to style some inline text with a simple color</Header>
            </Header>

            <Divider hidden />

            <!--<div class="ui right floated main menu">
                <a class="bug popup icon item" data-content="Edit This Page" href="https://github.com/fomantic/Fomantic-UI-Docs/edit/master/server/documents/introduction\getting-started.html.eco">
                <i class="edit icon"></i>
                </a>
                
                <a class="github popup icon item" data-content="View project on GitHub" href="https://github.com/fomantic/Fomantic-UI">
                <i class="alternate github icon"></i>
                </a>
            </div>-->
        </div>
    </Container>
</Segment>

<Divider hidden />

<Container class="main">
    <div class="ui active tab" data-tab="text">
        <Header page="h2">Definition</Header>
        <Example title="Size" description="Text can vary in the same sizes as icons" html={`
            <Segment>
                <p>Starting with <Text size="mini" color="red">mini</Text> text</p>
                <p>which turns into <span class="ui tiny red text">tiny</span> text</p>
                <p>changing to <span class="ui small red text">small</span> text until it is</p>
                <p>the default <span class="ui medium red text">medium</span> text</p>
                <p>and could be <span class="ui large red text">large</span> text</p>
                <p>to turn into <span class="ui big red text">big</span> text</p>
                <p>then growing to <span class="ui huge red text">huge</span> text</p>
                <p>to finally become <span class="ui red massive text">massive</span> text</p>
            </Segment>
        `} />
    </div>
</Container>

<script>
    import Container from 'sveltemantic/elements/container'
    import Segment from 'sveltemantic/elements/segment'
    import Divider from 'sveltemantic/elements/divider'
    import Header from 'sveltemantic/elements/header'
    import Text from 'sveltemantic/elements/text'
    import Example from '../../components/Example'
</script>