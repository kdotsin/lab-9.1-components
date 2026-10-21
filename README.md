# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

REFLECTIONS
Optional props: I checked whether onEdit existed before using it: onClick={onEdit ? () => onEdit(user.id) : undefined}. If it’s missing, no handler is attached, so a click does nothing.
Interface design: I made onEdit a function that takes the user’s id as a string, so the parent decides what happens and the card decides when. I added showEmail and showRole (true/false props) to control what displays. I added children so the parent can insert extra content, like “Last login.”
Type safety: TypeScript caught two mistakes. onClick passes an event object, but onEdit expects a string. Assigning a string to onEdit fails because it expects a function. I fixed both by wrapping the call in an arrow function (a short function written with =>).
Composition challenges: I destructured children but never rendered {children}, so the parent’s content didn’t appear. I also had to fix the layout so the avatar and text sat side by side.
