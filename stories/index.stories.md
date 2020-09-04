```js script
import { html } from '@open-wc/demoing-storybook';
import '../item-api.js';

export default {
  title: 'ItemApi',
  component: 'item-api',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# ItemApi

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add item-api
```

```js
import 'item-api/item-api.js';
```

```js preview-story
export const Simple = () => html`
  <item-api></item-api>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <item-api title="Hello World"></item-api>
`;
```
