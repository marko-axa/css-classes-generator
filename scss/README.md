# Documentation of utility classes

Following utility classes are complementary final adjustments for our primitives, and should be used as such.
Please don't abuse them, and restrain of adding new one, instead consider learning CSS.

Most of them are just tokens abstractions but they fell in category of 'utility classes' because well, they are classes.

Proper utility classes just as in programing do one thing and do it well. `.visually-hidden` for example.

## Visibility:

> Visibility is about `display: ` property, when you want hide/show parts of the UI depending of viewport size.

responsive: yes

- .hidden-yes {}
- .hidden-no {}

## Gutter:

> We use gutter `--gutter` as default space in all primitives where they apply.

responsive: no

- .gutter-{1-5}

## Gap (top):

> Gap top is complimentary utility to adjust space where needed. Say you use Stack primitive and want more space
> above stack and you feel nested stack is not needed. Gap top is what you use. This type of adjustment is
> something left for the fine tuning.

responsive: no

- .gap-top-{1-5}

### Example:

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

## Gap (bottom):

> Similar to gap top, but less often used.

- .gap-bottom-{1-5}

## Gap (inline):

> Gap inline is very handy if you want to setup symmetric left and right padding together.
> `auto` variant is `margin-inline: auto`, typically would be used for centering if you don't want to use `Center` primitive

- .gap-inline-{1-5}
- .gap-inline-auto

## Padding:

- .pad-{1-5}

## Padding (block):

- .pad-block-{1-5}

## Padding (inline):

- .pad-inline-{1-5}

## Font:

> Adjusting `font-family` based primary/secondary.

- .font-primary
- .font-secondary

## Text:

> Adjusting size of text, using `font-size`

- .text-base
- .text-{0-3}

## Leading:

> Leading is about changing `line-height`

- .leading-flat
- .leading-short
- .leading-regular

## Measure:

> Measure represents width of element, typically element where you have text. It's based on `ch` unit
> You can use it for other elements to specify measure as well, but keep in mind longest measure is `65ch`.

- .measure-micro
- .measure-compact
- .measure-short
- .measure-long

## Text Alignment:

> Aligning text `text-align`, prefixed with `ta-`

- .ta-center
- .ta-left
- .ta-right

## Text Transform:

> Transforming text `text-transform`, prefixed with `tt-`

- .tt-upper

## Width:

> This is percentage based widths(100%, 50%, 25%, 33%) more for layout declarations.

- .width-full
- .width-half
- .width-quarter
- .width-third
