# Render

This React component conditionally renders its children.

```jsx
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
