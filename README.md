## UI Components (In progress)

### Run Storybook :

```
yarn storybook
```

### Publishing and using the library with yalc :

```
yarn yalc:publish
```

Inside you current project

```
yarn add <Name>
```

## Status

### Currently :

- Common Styles
- Components :
  - HelperWizard
  - Input (Text, Checkbox, Radio, Select)
  - Chip
  - Loader
- Hooks :
  - useHelperWizard
  - useValidator (ajv validator)
  - useZod (zod validator)

### TODO :

- Improve Select Input
- Form component => props : extends HTMLElement< HTMLFormElement >, initialValues, onSubmit(only once validated), validate
- HelperWizard (improve positioning)
