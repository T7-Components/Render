`<Render>` uses the `if` property to evaluate whether an expression is truthy
or not in a Boolean context.

```jsx
<Render if={true}>
  <p>This shows up.</p>
</Render>

<Render if={someTruthyVar}>
  <p>This also shows up.</p>
</Render>

<Render if={false}>
  <p>This does not.</p>
</Render>
```
