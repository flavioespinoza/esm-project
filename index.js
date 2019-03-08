import Module from 'module'
import assert from 'assert'
import _ from 'lodash'
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

const _check = async (a, b) => {
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

;(async function() {
    let str1 = 'Hello'
    let str2 = chance.first()
    // _log.info(str1)
    // _log.warn(str2)
    // console.log(await _check(str1, str1))
    // console.log(await _check(str1, str2))
})()

export { _check }
