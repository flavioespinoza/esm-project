import { _error } from './error'

export const _divide = (a, b) => {
    try {
        return a / b
    } catch (err) {
        console.log('_divide', err)
    }
}

export const _multiply = (a, b) => {
    try {
        return a * b
    } catch (err) {
        _error('_multiply', err)
    }
}

export const _add = (a, b) => {
    try {
        return a + b
    } catch (err) {
        _error('_add', err)
    }
}

export const _subtract = (a, b) => {
    try {
        return a - b
    } catch (err) {
        _error('_subtract', err)
    }
}
