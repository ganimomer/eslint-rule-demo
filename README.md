# ESLint Rule Demos

This repo shows two examples of custom ESLint rules.
The master branch has a template of an empty ESLint rule and test.

## Getting Started

```
npm install
```

## Implemented Rules

### `no-trainwreck`

Check that there are no member expression chains over the specified length (default is `3`).

Examples of *incorrect* code for this rule:
```js
const connection = editorAPI.dsRead.platform.controllers.connections.getPrimaryConnection();
```

examples of *correct* code for this rule:
```js
const connection = platformSelectors.getPrimaryConnection();
```

*This rule is implemented in the `no-trainwreck` branch

### `prefer-find`
Prefer using `Array#find` instead of `Array#filter` when only referring to the first result

Examples of *incorrect* code for this rule:
```js
const found = arr.filter(f)[0];
```

examples of *correct* code for this rule:
```js
const found = arr.find(f);
```

*This rule is implemented in the `prefer-find` and `prefer-find-esquery` branches.