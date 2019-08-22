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
        <Example title="Size" description="Text can vary in the same sizes as icons" html={`<Segment>
    <p>Starting with <Text size="mini" color="red">mini</Text> text</p>
    <p>which turns into <Text size="tiny" color="red">tiny</Text> text</p>
    <p>changing to <Text size="small" color="red">small</Text> text until it is</p>
    <p>the default <Text size="medium" color="red">medium</Text> text</p>
    <p>and could be <Text size="large" color="red">large</Text> text</p>
    <p>to turn into <Text size="big" color="red">big</Text> text</p>
    <p>then growing to <Text size="huge" color="red">huge</Text> text</p>
    <p>to finally become <Text size="massive" color="red">massive</Text> text</p>
</Segment>`}>
        <Segment>
            <p>Starting with <Text size="mini" color="red">mini</Text> text</p>
            <p>which turns into <Text size="tiny" color="red">tiny</Text> text</p>
            <p>changing to <Text size="small" color="red">small</Text> text until it is</p>
            <p>the default <Text size="medium" color="red">medium</Text> text</p>
            <p>and could be <Text size="large" color="red">large</Text> text</p>
            <p>to turn into <Text size="big" color="red">big</Text> text</p>
            <p>then growing to <Text size="huge" color="red">huge</Text> text</p>
            <p>to finally become <Text size="massive" color="red">massive</Text> text</p>
        </Segment>
    </Example>
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