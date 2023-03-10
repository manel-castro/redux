Implements the most basic functionality of react-router with a bundle size of 6.1 kB.

It allows to configure nested routing.

Components to use:

```JSX
- <Link>
- <Menu>
- <Route>
```

Example:

```JSX
<Menu nestLevel={0}>
  <Route path="" component={Home}></Route>
  <Route path="catalog" component={CatalogApp}></Route>
  <Route path="about" component={About}></Route>
</Menu>
```

PROPS:

Link component

- Props: navLevel (the routing nested level)

Route component

- Props: path, component

Menu component

- Props: nestLevel (the routing nested level)
