// You can also create another variable, not use "require" specifically,
//see https://youtu.be/JcZ-FzfDq8A?t=1880

require = require('esm')(module, { mainFields: ['module', 'main'] })
require = require('esm')(module, { await: true })
require = require('esm')(module, { cjs: true })

module.exports = require('./index.js')
