# Custom Components

This folder contains custom-built components and their related files.

## Structure

```
custom/
├── components/           # Reusable custom components
│   └── custom-button/    # Custom button component
│       ├── custom-button.component.ts    # Component logic
│       └── custom-button.component.scss  # Component styles
├── pages/               # Demo pages for custom components
│   └── custom-button-demo/ # Custom button demo page
│       └── custom-button-demo.component.ts
└── index.ts             # Barrel exports for easy importing
```

## Usage

### Custom Button Component

The custom button component provides a highly customizable button with various styles, sizes, and states.

#### Features:
- 9 different variants (primary, secondary, success, danger, warning, info, light, dark, outline)
- 4 sizes (sm, md, lg, xl)
- States: normal, disabled, loading
- Modifiers: full-width, rounded
- Smooth animations and hover effects
- Ripple effect on click

#### Basic Usage:
```typescript
import { CustomButtonComponent } from '@/custom/components/custom-button/custom-button.component';

// In your component
@Component({
  imports: [CustomButtonComponent],
  // ...
})
```

```html
<app-custom-button variant="primary" size="lg" (onClick)="handleClick()">
  Click Me!
</app-custom-button>
```

#### Props:
- `variant`: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'outline'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `disabled`: boolean
- `loading`: boolean
- `fullWidth`: boolean
- `rounded`: boolean
- `type`: 'button' | 'submit' | 'reset'

#### Events:
- `onClick`: Emitted when button is clicked (if not disabled or loading)

## Demo

Visit `/uikit/custom-button` to see the custom button component in action with all its variants and features.

## Adding New Custom Components

1. Create your component in the `custom/components/` folder
2. Add appropriate styling
3. Create a demo page in `custom/pages/`
4. Export your component in `custom/index.ts`
5. Add routing in the appropriate routes file
6. Update this README