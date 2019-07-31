<script>
    import { Container, Segment, Header, Divider, Placeholder } from 'sveltemantic/elements';

    export let status;
    export let error;

    const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
    <title>{status}</title>
</svelte:head>

<Segment color='masthead' vertical>
    <Container>
        <div class="introduction">
            <Header page='h1'>
                {status}

                <Header sub>{error.message}</Header>
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

<Container>
    <Placeholder header=4 fluid paragraphs=5 lines=5 />
</Container>
