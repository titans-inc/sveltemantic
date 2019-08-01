import { render, cleanup, fireEvent, waitForElement } from '@testing-library/svelte'
import Step from '../../src/elements/Step.svelte'

beforeEach(() => {
    testId = id('step')
    cleanup()
})

describe('Step.svelte', () => {
    test('Step with default props', () => {
        const { getByTestId } = render(Step, { props: propsWithTestId() })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step')
        expect(getByTestId(testId)).toBeInstanceOf(HTMLDivElement)
    })

    test('Step with link prop', () => {
        const href = 'https://github.com/titans-inc/sveltemantic'
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                link: href
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveAttribute('href', href)
        expect(getByTestId(testId)).toBeInstanceOf(HTMLAnchorElement)
    })

    test('Step with active prop', () => {
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                active: true
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step', 'active')
    })

    test('Step with completed prop', () => {
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                completed: true
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step', 'completed')
    })

    test('Step with disabled prop', () => {
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                disabled: true
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step', 'disabled')
    })

    test('Step with additional classes', () => {
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                class: 'text-lato text-compact'
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step', 'text-lato', 'text-compact')
    })

    test('Step with custom actions', () => {
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                use: [
                    node => node.classList.add('drag-drop-enable'),
                    node => node.setAttribute('draggable', 'true')
                ]
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step', 'drag-drop-enable')
        expect(getByTestId(testId)).toHaveAttribute('draggable', 'true')
    })

    test('Step with additional attributes', () => {
        const { getByTestId } = render(Step, { props: propsWithTestId() })

        expect(getByTestId(testId)).toHaveAttribute('data-testid', testId)
    })

    test('Step with dom events', async () => {
        const { component, getByTestId } = render(Step, { props: propsWithTestId() })

        component.$on('click', event => {
            event.target.setAttribute('clicked', true)
        })

        component.$on('focus', event => {
            event.target.setAttribute('focused', true)
        })

        fireEvent.click(getByTestId(testId))
        fireEvent.focus(getByTestId(testId))

        const div = await waitForElement(() => getByTestId(testId))

        expect(div).toHaveAttribute('clicked')
        expect(div).toHaveAttribute('focused')
    })

    test('Step with multiple props and events snapshot', async () => {
        const { component, getByTestId } = render(Step, {
            props: propsWithTestId({
                class: 'extra',
                completed: true,
                disabled: true,
                link: 'https://github.com/titans-inc/sveltemantic',
                use: [
                    node => node.classList.add('drag-drop-enable'),
                    node => node.setAttribute('draggable', 'true')
                ]
            })
        })

        component.$on('click', event => {
            event.target.setAttribute('clicked', true)
        })

        component.$on('focus', event => {
            event.target.setAttribute('focused', true)
        })

        fireEvent.click(getByTestId(testId))
        fireEvent.focus(getByTestId(testId))

        const div = await waitForElement(() => getByTestId(testId))

        expect(ignoreTestId(div)).toMatchSnapshot()
    })
})
