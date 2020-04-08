/* eslint-disable space-before-function-paren */
var postcss = require('postcss')

module.exports = postcss.plugin('postcss-pxtocssvar', function(opts) {
  opts = opts || {}
  opts.rootVar = opts.rootVar || 'base'
  // Work with options here

  return function(root) {
    root.walkDecls(function(decl) {
      if (decl.value.indexOf('px') > -1) {
        decl.value = decl.value.replace(/(-?[0-9.]+)px/g, function($0) {
          return 'calc(' + $0 + ' * var(--' + opts.rootVar + '))'
        })
      }
    })
  }
})
