## Utility CSS Class Generator

> this is project is based on gorko utility generator

### Motivation

We want to generate finite limited number of utility classes, and then use it anywhere we want.

### What was considered?

We considered using `tailwind` for utility classes, after considering our constrains and
burden of configuration, setup and long term maintenance we decided to something lighter (gorko).

#### Questions that we asked:

- can we configure tailwind to not add tokens under :root
- can we configure tailwind with our current old version of CRA
- can we configure tailwind to change how it generates class names and use attributes
- how can we avoid putting project in another `glamor` situation

## Install

1. `npm run install`
2. `npm run build`
   - `css/utils.css`
   - `css/css-classes.generated.css`
   - `public/utils.css`

## Why attribute selectors

vorsorge portal is rendered as micro frontend in myaxa, it's not allowed to use class names in
css files. If you do it, it will be auto prefixed and you need to auto prefix where you use them.
To avoid all this, esspecially manually calling `prefixCss` in frontend we use attribute selectors.

### Why use css-classes.generated.css

Because attribute selectors are generated and not class names, most tooling for editors will not pick up
and auto suggest those classnames

### Include in html file

```html
<link rel="stylesheet" href="css/utils.css" />
```

## Configuration & Modification

for configuration refer to documentation [here](gorko/readme.md)

### TLDR

To change what is generated by `npm run build ` you need to address configuration in `scss/_config.scss`

### Demo

<a href="https://raw.githack.com/marko-axa/css-classes-generator/master/public/index.html">Demo</a>
