/* eslint-disable es5/no-template-literals */
/* eslint-disable space-before-function-paren */
var postcss = require('postcss')

var plugin = require('./')

function run(input, output, opts) {
  return postcss([plugin(opts)])
    .process(input)
    .then(function (result) {
      expect(result.css).toEqual(output)
      expect(result.warnings()).toHaveLength(0)
    })
}

it('测试单个值', function () {
  return run(
    `
#main {
    width: 1px;
}`,
    `
#main {
    width: calc(1px * var(--base));
}`,
    {}
  )
})

it('测试混合值', function () {
  return run(
    `
#main {
    border: 1px solid black;
}`,
    `
#main {
    border: calc(1px * var(--base)) solid black;
}`,
    {}
  )
})

it('calc嵌套', function () {
  return run(
    `
#main {
    width: calc(1px - 3px);
}`,
    `
#main {
    width: calc(calc(1px * var(--base)) - calc(3px * var(--base)));
}`,
    {}
  )
})

it('浮点数', function () {
  return run(
    `
#main {
    width: 12.3px;
}`,
    `
#main {
    width: calc(12.3px * var(--base));
}`,
    {}
  )
})

it('负数', function () {
  return run(
    `
#main {
    width: -12.3px;
}`,
    `
#main {
    width: calc(-12.3px * var(--base));
}`,
    {}
  )
})

it('不包含减号', function () {
  return run(
    `
#main {
    width: 1px - 12.3px;
}`,
    `
#main {
    width: calc(1px * var(--base)) - calc(12.3px * var(--base));
}`,
    {}
  )
})

// it('减号可以不加空格', function () {
//   return run(
//     `
// #main {
//     width: 1px-12.3px;
// }`,
//     `
// #main {
//     width: calc(1px * var(--base)) - calc(12.3px * var(--base));
// }`,
//     {}
//   )
// })
