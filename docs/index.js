import { createFilter, dataToEsm } from 'rollup-pluginutils'

export default function sveltedoc (options = {}) {
    const filter = createFilter(options.include, options.exclude)

    return {
        transform (code, id) {
            if (!filter(id)) return null

            const exports = /export\b (let|var|const)\b([^=\r\n;]+)=?([^;\r\n]*)/g
            let match
            const exported = []

            while ((match = exports.exec(code))) {
                exported.push({
                    type: match[1].trim(),
                    name: match[2].trim(),
                    value: match[3].trim()
                })
            }

            return {
                code: dataToEsm(exported, {
                    preferConst: true,
                    compact: true,
                    namedExports: false,
                    objectShorthand: false,
                    indent: '    '
                })
            }
        }
    }
}
