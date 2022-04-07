# erp-system

Internal ERP system

## Extensions

For more consistency in development

### CSS

Styled components, or SCSS with css modules can be used.
Both will allowed for reuse of component-like styles, it's mainly a matter of where the code goes.

- Set browserlist
  - https://parceljs.org/languages/javascript/#browser-compatibility
  - https://github.com/browserslist/browserslist#best-practices
- If images are used?
  - parcel does have built-in minification
  - https://github.com/okonet/lint-staged#minify-the-images

#### Styled Components

- Looking into sorting the styled components side with style-lint and typescript interactions.
  - https://github.com/Igorbek/typescript-plugin-styled-components
- If there are clashes linting with styled-comps
  - https://github.com/styled-components/stylelint-config-styled-components/blob/master/index.js
- Themeing
  - https://github.com/styled-components/styled-theming
- Typing
  - https://styled-components.com/docs/api#typescript

### Typescript

- May require different transpiler depending on .tsconfig
  - https://parceljs.org/languages/typescript/#tsc
