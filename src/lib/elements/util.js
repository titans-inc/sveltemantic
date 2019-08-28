function smdirectional (direction, clx) {
    if (!direction) return ''
    return typeof direction === 'boolean' ? clx : `${direction} ${clx}`
}

export function smfloated (float) {
    return smdirectional(float, 'floated')
}

export function smlabeled (label) {
    return smdirectional(label, 'labeled')
}

export function smiconed (icon) {
    return smdirectional(icon, 'icon')
}

export function smactioned (action) {
    return smdirectional(action, 'action')
}

export function smaligned (alignment) {
    return ['left', 'center', 'right'].indexOf(alignment) !== -1 ? `${alignment} aligned` : alignment
}

export function smattached (attach) {
    return smdirectional(attach, 'attached')
}
