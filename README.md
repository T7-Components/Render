# Render

The **Render** component conditionally renders children when a condition is met.

---

`<Render>` uses the `if` property to evaluate whether an expression is truthy
or not in a Boolean context.

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
  This does not.
</Render>

<Render if={0 || '' || NaN || null || undefined}>
  This does not.
</Render>
```
