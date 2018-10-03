# @t7/render
https://www.npmjs.com/package/@t7/render

Conditionally render children

## Installation
```sh
npm install @t7/render --save
```

## Usage
```js
// ================
// TRUTHY EXAMPLES.
// ================

<Render if={true}>
  This renders.
</Render>

<Render if={somethingTruthy}>
  This renders.
</Render>

// ===============
// FALSY EXAMPLES.
// ===============

<Render if={false}>
  This does not render.
</Render>

<Render if={0 || '' || NaN || null || undefined}>
  This does not render.
</Render>
```

Demo page:

https://t7-components.github.io/render/build/
