import clsx from 'clsx'

export function clsxd () {
    return clsx(...arguments).split(' ').filter((z, i, p) => {
        return i === p.indexOf(z)
    }).join(' ')
}
