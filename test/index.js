import '@testing-library/jest-dom/extend-expect'

global.testId = null

global.id = (component, str = Math.random().toString(36).substring(7)) => {
    let hash = 5381
    let i = str.length

    while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i)
    return `${component}-${(hash >>> 0).toString(36)}`
}

global.propsWithTestId = (props = {}) => {
    props['data-testid'] = global.testId
    return props
}

global.ignoreTestId = container => {
    return container.outerHTML.replace(global.testId, 'any')
}
