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

    test('Step with additional classes and attributes', () => {
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                class: 'clearfix command'
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step', 'clearfix', 'command')
        expect(getByTestId(testId)).toHaveAttribute('data-testid', testId)
    })

    test('Step with custom actions', () => {
        const { getByTestId } = render(Step, {
            props: propsWithTestId({
                use: [
                    node => node.classList.add('active'),
                    node => node.setAttribute('data-step', '#steps')
                ]
            })
        })

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(getByTestId(testId)).toHaveClass('step', 'active')
        expect(getByTestId(testId)).toHaveAttribute('data-step', '#steps')
    })

    test('Step with dom events', async () => {
        const { component, getByTestId } = render(Step, {
            props: propsWithTestId({
                link: 'https://google.com'
            })
        })

        component.$on('mousedown', event => {
            event.target.setAttribute('mousedown', true)
        })

        fireEvent.mouseDown(getByTestId(testId))

        const div = await waitForElement(() => getByTestId(testId))

        expect(ignoreTestId(getByTestId(testId))).toMatchSnapshot()
        expect(div).toHaveAttribute('mousedown', 'true')
    })

    test('Step with multiple props and events snapshot', async () => {
        const { component, getByTestId } = render(Step, {
            props: propsWithTestId({
                class: 'extra',
                completed: true,
                disabled: true,
                link: 'https://github.com/titans-inc/sveltemantic',
                use: [
                    node => node.classList.add('orange'),
                    node => node.setAttribute('data-tag', 'card')
                ]
            })
        })

        component.$on('cut', event => {
            event.target.setAttribute('cut', true)
        })

        component.$on('copy', event => {
            event.target.setAttribute('copy', true)
        })

        fireEvent.cut(getByTestId(testId))
        fireEvent.copy(getByTestId(testId))

        const div = await waitForElement(() => getByTestId(testId))

        expect(ignoreTestId(div)).toMatchSnapshot()
    })
})
