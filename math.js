import assert from 'assert'
import _ from 'lodash'
import { _log, log } from '@flavioespinoza/log_log'
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
_log.info(str1)
_log.warn(str2)
console.log(_check(str1, str1))
console.log(_deepStrictEqual(str1, str1))

export { _check }
export default _deepStrictEqual