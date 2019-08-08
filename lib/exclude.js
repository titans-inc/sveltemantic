// https://github.com/hperrin/svelte-material-ui/

export function exclude (obj, keys) {
    let newObj = obj

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        // eslint-disable-next-line no-unused-vars
        const { [key]: removed, ...everythingElse } = newObj
        newObj = everythingElse
    }

    return newObj
}
