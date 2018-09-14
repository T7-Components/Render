# render

Conditionally render childrem

## Installation
```js
npm install @t7/render --save-dev
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
