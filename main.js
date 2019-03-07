import _NowTimestamp from './test_router'
import assert from 'assert'
import _error from './error'
import _ from 'lodash'
import { join } from 'path'
import { _log, log } from './_log'
import { Chance } from 'chance'

const chance = new Chance()

const _ts = _NowTimestamp()

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
    console.log(await _check(str1, str1))
    console.log(await _check(str1, str2))
})()

export { _ts }