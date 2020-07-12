# Angular Material Nx Boilerplate

Boilerplate project for:
- Angular
- Nx Workspace
- Angular Material
- Bootstrap

## Setup 

1. Install dependencies

```
npm install
```

2. Create app with name `app-name`

```
ng generate app app-name
```

3. Import Material Module to `app.module.ts`

```Typescript
import { MaterialModule } from 'libs/shared/material.module';
```

```Typescript
imports: [
  ...
  MaterialModule
]
```

To add Material API references go to `libs/shared/material.module` and add the module to `imports` and `exports`. `MatCardModule` is imported as a placeholder to start with.


4. Import bootstrap and material theme in `styles.scss`

```scss
@import '~bootstrap';
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```

5. Done! Serve your created app using `ng serve app-name`
