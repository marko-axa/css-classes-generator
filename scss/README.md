# Documentation of utility classes

Following utility classes are complementary final adjustments for our primitives, and should be used as such.
Please don't abuse them, and restrain of adding new one, instead consider learning CSS.

Most of them are just tokens abstractions but they fell in category of 'utility classes' because well, they are classes.

Proper utility classes just as in programing do one thing and do it well. `.visually-hidden` for example.

## Table of contents

- [Visibility](#visibility)
- [Gutter](#gutter)
- [Gap (top)](#gap-top)
  - [Example](#example)
  - [Gap (bottom)](#gap-bottom)
  - [Gap (inline)](#gap-inline)
- [Padding](#padding)
  - [Padding (block):](#padding-block)
  - [Padding (inline):](#padding-inline)
- [Typography](#typography)
  - [Text Sizes](#text-sizes)
  - [Text Align](#text-align)
  - [Text Transform](#text-transform)
  - [Typeface (Font Family)](#typeface-font-family)
  - [Leading](#leading)
  - [Measure](#measure)
- [Width](#width)

## Media Queries & Responsive classes

> Following media queries are used to generate 'responsive' utility classes.
> When you see 'responsive' in table of property, you can use it as per example
> NOTE: typically you would use colon `:` for responsive classes, but in our case
> combination rollup + postcss didn't allow us to do so, hence chose `_`;

- sm: (min-width: 48em)
- md: (min-width: 62em)
- lg: (min-width: 75em)
- xl: (min-width: 90em)

```jsx
<div className="lg_hidden-yes">
  <p>You will not be able to see me on large screens</p>
</div>
```

## Visibility

> Visibility is about `display: ` property, when you want hide/show parts of the UI depending of viewport size.

- .hidden-yes {}
- .hidden-no {}

| Property   | Value | Details         |
| ---------- | ----- | --------------- |
| Responsive | Yes   | `lg_hidden-yes` |

## Gutter

> We use gutter `--gutter` as default space in all primitives where they apply.

- .gutter-{1-5}

| Property   | Value | Details |
| ---------- | ----- | ------- |
| Responsive | No    | N/A     |
| Fluid      | No    | N/A     |

## Gap (top)

> Gap top is complimentary utility to adjust space where needed. Say you use Stack primitive and want more space
> above stack and you feel nested stack is not needed. Gap top is what you use. This type of adjustment is
> something left for the fine tuning.

- .gap-top-{1-5}

| Property   | Value | Details           |
| ---------- | ----- | ----------------- |
| Responsive | No    | N/A               |
| Fluid      | Yes   | uses fluid spaces |

#### Example

```jsx
<main>
  <div className="gap-top-3">
    <Stack space="md">
      <Card />
      <Card />
      <DeathForm />
    </Stack>
  </div>
</main>
```

### Gap (bottom)

> Similar to gap top, but less often used.

- .gap-bottom-{1-5}

| Property   | Value | Details           |
| ---------- | ----- | ----------------- |
| Responsive | No    | N/A               |
| Fluid      | Yes   | uses fluid spaces |

### Gap (inline)

> Gap inline is very handy if you want to setup symmetric left and right padding together.
> `auto` variant is `margin-inline: auto`, typically would be used for centering if you don't want to use `Center` primitive

- .gap-inline-{1-5}
- .gap-inline-auto

| Property   | Value | Details           |
| ---------- | ----- | ----------------- |
| Responsive | No    | N/A               |
| Fluid      | Yes   | uses fluid spaces |

## Padding

- .pad-{1-5}

### Padding (block):

- .pad-block-{1-5}

### Padding (inline):

- .pad-inline-{1-5}

## Typography

### Text Sizes

> Adjusting size of text, using `font-size`

- .text-base
- .text-{0-3}

| Property   | Value | Details           |
| ---------- | ----- | ----------------- |
| Responsive | No    | N/A               |
| Fluid      | Yes   | uses fluid spaces |

> Text related utilityes

### Text Align

> Aligning text `text-align`, prefixed with `ta-`

- .ta-center
- .ta-left
- .ta-right

### Text Transform

> Transforming text `text-transform`, prefixed with `tt-`

- .tt-upper

### Typeface (Font Family)

> Adjusting `font-family` based primary/secondary.

- .font-primary
- .font-secondary

### Leading

> Leading is about changing `line-height`

- .leading-flat
- .leading-short
- .leading-regular

### Measure

> Measure represents width of element, typically element where you have text. It's based on `ch` unit
> You can use it for other elements to specify measure as well, but keep in mind longest measure is `65ch`.

- .measure-micro
- .measure-compact
- .measure-short
- .measure-long

## Width

> This is percentage based widths(100%, 50%, 25%, 33%) more for layout declarations.

- .width-full
- .width-half
- .width-quarter
- .width-third

| Property   | Value | Details          |
| ---------- | ----- | ---------------- |
| Responsive | Yes   | `sm_width-half`  |
| Fluid      | Yes   | uses percentages |
