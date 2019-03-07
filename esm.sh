echo 'import { join } from "path"; console.log(join("Hello", "Flavio"))' > main.js

echo '
import { _NowTimestamp } from "./test_router"
import { join } from "path"
const log = require("ololog")
let a = "Hello"
let b = "Color"
log.lightCyan(join(a, b))
log.lightYellow(_NowTimestamp())
' > main.js

echo '
import _ from "lodash"
export default function _NowTimestamp() {
    return _.now()
}
' > test_router.js