// from https://github.com/avajs/ava/blob/master/docs/recipes/vue.md

// Setup browser environment
require('browser-env')();
const hooks = require('require-extension-hooks');

// Setup js files to be processed by `require-extension-hooks-babel`
hooks(['js']).exclude(({filename}) => filename.match(/\/node_modules\//)).plugin('babel').push();