const Any: any = () => {
    return {}
}

const Circular: any = () => {
    return {}
}

interface GetAttribute {
    getAttribute(attr: string): void
}

interface SetAttribute {
    setAttribute(attr: string): void
}

const Getter = (attr: string) => {
    let _get: GetAttribute
    return _get.getAttribute(attr)
}

const Setter = (attr: string) => {
    let _set: SetAttribute
    return _set.setAttribute(attr)
}

interface _Module {
    children: Array<string>
    exports: Function
    filename: string
    id: string
    loaded: boolean
    parent: Function
    paths: Array<string>
}

const log: _Module = {
    children: [],
    exports: () => {
        return this
    },
    filename: '/Users/Flavor/Documents/Projects/log_log/node_modules/ololog/build/ololog.js',
    id: '/Users/Flavor/Documents/Projects/log_log/node_modules/ololog/build/ololog.js',
    loaded: true,
    parent: null,
    paths: []
}

const _log: _Module = {
    children: [],
    exports: () => {
        return this
    },
    filename: '/Users/Flavor/Documents/Projects/log_log/node_modules/ansicolor/build/ansicolor.js',
    id: '/Users/Flavor/Documents/Projects/log_log/node_modules/ansicolor/build/ansicolor.js',
    loaded: true,
    parent: null,
    paths: []
}

const Module = () => {
    return {
        children: [log, _log],
        exports: {
            _log: {},
            log: {
                configure: Function,
                from: Function,
                before: Function,
                methods_: Object,
                methods: Function,
                impl: Object,
                prev: Function,
                null: Getter,
                indent: Function,
                error: Getter,
                warn: Getter,
                info: Getter,
                maxArrayLength: Function,
                maxObjectLength: Function,
                maxDepth: Function,
                maxLength: Function,
                unlimited: Getter,
                noPretty: Getter,
                noLocate: Getter,
                precision: Function,
                serialize: Getter,
                deserialize: Getter,
                newline: Function,
                handleNodeErrors: Function,
                black: Getter,
                bgBlack: Getter,
                red: Getter,
                bgRed: Getter,
                green: Getter,
                bgGreen: Getter,
                yellow: Getter,
                bgYellow: Getter,
                blue: Getter,
                bgBlue: Getter,
                magenta: Getter,
                bgMagenta: Getter,
                cyan: Getter,
                bgCyan: Getter,
                lightGray: Getter,
                bgLightGray: Getter,
                default: Getter,
                bgDefault: Getter,
                darkGray: Getter,
                bgDarkGray: Getter,
                lightRed: Getter,
                bgLightRed: Getter,
                lightGreen: Getter,
                bgLightGreen: Getter,
                lightYellow: Getter,
                bgLightYellow: Getter,
                lightBlue: Getter,
                bgLightBlue: Getter,
                lightMagenta: Getter,
                bgLightMagenta: Getter,
                lightCyan: Getter,
                bgLightCyan: Getter,
                white: Getter,
                bgWhite: Getter,
                bgBrightRed: Getter,
                bgBrightGreen: Getter,
                bgBrightYellow: Getter,
                bgBrightBlue: Getter,
                bgBrightMagenta: Getter,
                bgBrightCyan: Getter,
                bright: Getter,
                dim: Getter,
                italic: Getter,
                underline: Getter,
                inverse: Getter
            }
        },
        filename: '/Users/Flavor/Documents/Projects/log_log/index.js',
        id: '/Users/Flavor/Documents/Projects/log_log/index.js',
        loaded: Getter && Setter,
        parent: {
            id: '.',
            exports: {},
            parent: null,
            filename: '/Users/Flavor/Documents/Projects/log_log/esm-loader.js',
            loaded: false,
            children: [Module, Circular],
            paths: [
                '/Users/Flavor/Documents/Projects/log_log/node_modules',
                '/Users/Flavor/Documents/Projects/node_modules',
                '/Users/Flavor/Documents/node_modules',
                '/Users/Flavor/node_modules',
                '/Users/node_modules',
                '/node_modules'
            ]
        },
        paths: [
            '/Users/Flavor/Documents/Projects/log_log/node_modules',
            '/Users/Flavor/Documents/Projects/node_modules',
            '/Users/Flavor/Documents/node_modules',
            '/Users/Flavor/node_modules',
            '/Users/node_modules',
            '/node_modules'
        ]
    }
}
