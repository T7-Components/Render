# Render

The **Render** component conditionally renders children when a condition is met.

---

`<Render>` uses the `if` property to evaluate whether an expression is truthy
or not in a Boolean context.

```jsx
<Render if={true}>
  This renders.
</Render>

<Render if={someTruthyVar}>
  This renders.
</Render>

<Render if={false}>
  This does not.
</Render>

<Render if={null || undefined}>
  This does not.
</Render>
```
