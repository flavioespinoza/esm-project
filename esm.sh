
# 1 ------- 

echo "

import { _log, log } from '@flavioespinoza/log_log'
_log.alert('Hello Single Quotes! ;)')

" > test.js


# 2 ------- 

echo "

import { _log, log } from '@flavioespinoza/log_log'
_log.alert('Hello Single Quotes! ;)')

" > test.js



# 3 ------- 

echo "

import { _log, log } from '@flavioespinoza/log_log'
import _ from 'lodash'

const _timestamp = () => {
    return _.now()
}

_log.warn('timestamp now: ' + _timestamp())

export {
    _timestamp
}

" > test.js