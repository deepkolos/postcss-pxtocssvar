# PostCSS Pxtocssvar [![Build Status][ci-img]][ci]

[PostCSS] plugin convert px to calc(var(--base)).

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
