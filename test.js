

import { _log, log } from '@flavioespinoza/log_log'
import _ from 'lodash'

const _timestamp = () => {
    return _.now()
}

_log.warn('timestamp now: ' + _timestamp())

_log.warn()

export {
    _timestamp
}


