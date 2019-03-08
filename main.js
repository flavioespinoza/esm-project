import assert from 'assert'
import { Chance } from 'chance'

const chance = new Chance()

const assertErrorInfo = err => {
    return {
        name: err.name,
        code: err.code,
        actual: err.actual,
        expected: err.expected,
        operator: err.operator
    }
}

const _deepStrictEqual = (a, b) => {
    try {
        assert.deepStrictEqual(a, b)
        return {
            success: true,
            message: `assert.deepStrictEqual(${a}, ${b}) => true`,
            info: {}
        }
    } catch (err) {
        return {
            success: false,
            message: `assert.deepStrictEqual(${a}, ${b}) => false`,
            info: assertErrorInfo(err)
        }
    }
}

const _check = (a, b) => {
    try {
        assert.deepEqual(a, b)
        return {
            success: true,
            message: `assert.deepEqual(${a}, ${b}) => true`,
            info: {}
        }
    } catch (err) {
        return {
            success: false,
            message: `assert.deepEqual(${a}, ${b}) => false`,
            info: assertErrorInfo(err)
        }
    }
}

let str1 = 'Hello'
let str2 = chance.first()

console.log(_check(str1, str1))
console.log(_deepStrictEqual(str1, str1))

export { _check }
export default _deepStrictEqual