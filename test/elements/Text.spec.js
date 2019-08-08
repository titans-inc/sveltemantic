import { render, cleanup, fireEvent, waitForElement } from '@testing-library/svelte'
import Text from '../../src/elements/text'

beforeEach(() => {
    testId = id('text')
    cleanup()
})

describe('Text.svelte', () => {
    test('Text with default props', () => {
        const { getByTestId } = render(Text, { props: propsWithTestId() })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('ui', 'text')
    })

    test('Text with color prop', () => {
        const { getByTestId } = render(Text, {
            props: propsWithTestId({
                color: 'red'
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('ui', 'red', 'text')
    })

    test('Text with size prop', () => {
        const { getByTestId } = render(Text, {
            props: propsWithTestId({
                size: 'huge'
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('ui', 'huge', 'text')
    })

    test('Text with inverted prop', () => {
        const { getByTestId } = render(Text, {
            props: propsWithTestId({
                inverted: true
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('ui', 'inverted', 'text')
    })

    test('Text with disabled prop', () => {
        const { getByTestId } = render(Text, {
            props: propsWithTestId({
                disabled: true
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('ui', 'disabled', 'text')
    })

    test('Text with additional classes and attributes', () => {
        const { getByTestId } = render(Text, {
            props: propsWithTestId({
                class: 'text-lato text-compact'
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('ui', 'text-lato', 'text-compact', 'text')
        expect(getByTestId(testId)).toHaveAttribute('data-testid', testId)
    })

    test('Text with custom actions', () => {
        const { getByTestId } = render(Text, {
            props: propsWithTestId({
                use: [
                    node => node.classList.add('drag-drop-enable'),
                    node => node.setAttribute('draggable', 'true')
                ]
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('ui', 'drag-drop-enable', 'text')
        expect(getByTestId(testId)).toHaveAttribute('draggable', 'true')
    })

    test('Text with dom events', async () => {
        const { component, getByTestId } = render(Text, { props: propsWithTestId() })

        component.$on('click', event => {
            event.target.setAttribute('clicked', true)
        })

        component.$on('focus', event => {
            event.target.setAttribute('focused', true)
        })

        fireEvent.click(getByTestId(testId))
        fireEvent.focus(getByTestId(testId))

        const span = await waitForElement(() => getByTestId(testId))

        expect(ignoreTestId(span)).toMatchSnapshot()
        expect(span).toHaveAttribute('clicked')
        expect(span).toHaveAttribute('focused')
    })

    test('Text with multiple props and events snapshot', async () => {
        const { component, getByTestId } = render(Text, {
            props: propsWithTestId({
                class: 'extra',
                color: 'purple',
                disabled: true,
                inverted: true,
                use: [
                    node => node.classList.add('hidden'),
                    node => node.setAttribute('aria-label', 'true')
                ]
            })
        })

        component.$on('dblclick', event => {
            event.target.setAttribute('dblclicked', true)
        })

        component.$on('blur', event => {
            event.target.setAttribute('blured', true)
        })

        fireEvent.dblClick(getByTestId(testId))
        fireEvent.blur(getByTestId(testId))

        const span = await waitForElement(() => getByTestId(testId))

        expect(ignoreTestId(span)).toMatchSnapshot()
    })
})
