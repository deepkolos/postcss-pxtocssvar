# PostCSS Pxtocssvar [![Build Status][ci-img]][ci]

[PostCSS] plugin convert px to calc(var(--base)).

用于解决的情况:

1. webview高度由内容撑开, 而preact + vw/rem布局无法撑开webview
2. webview宽度不固定, 比如小卡webview加边距, 大卡webview占满, 而小卡内容需要在类似占满的比例展示

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/deepkolos/postcss-pxtocssvar.svg
[ci]:      https://travis-ci.org/deepkolos/postcss-pxtocssvar

```css
html {
    --base: calc(385 / 1080);
}

.foo {
  width: 100px;
}
```

```css
html {
    --base: calc(385 / 1080);
}

.foo {
  width: calc(100px * var(--base));
}
```

## Usage

```js
postcss([ require('postcss-pxtocssvar') ])
```

See [PostCSS] docs for examples for your environment.


## 已知问题

减号需要加空格: 1px - 2px
