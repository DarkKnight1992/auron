# @auron/styles

Core styles for Auron UI — CSS layers, theme variables, component styles, and Tailwind CSS variants for all 85+ components.

This package is framework-agnostic. It provides the visual foundation consumed by `@auron/vue` (and future `@auron/react` / `@auron/angular` packages).

## Installation

```bash
pnpm add @auron/styles
```

## Usage

Import the full stylesheet in your app entry:

```css
@import "@auron/styles";
```

Or import individual component styles:

```css
@import "@auron/styles/components/button.css" layer(components);
@import "@auron/styles/components/chip.css" layer(components);
@import "@auron/styles/themes.css" layer(base);
```

## Structure

```
@auron/styles/
  index.css              # Full bundle (base + themes + components + variants)
  base/base.css          # CSS reset and base layer
  themes/default/        # Default theme variables
  components/            # Per-component CSS (button.css, card.css, …)
  variants/              # Tailwind CSS custom variant definitions
  src/                   # TypeScript tailwind-variants slot definitions
```

## Theming

Override CSS custom properties to customise the design tokens:

```css
:root {
  --auron-primary: oklch(55% 0.2 262);
  --auron-radius-medium: 0.5rem;
}
```

## License

MIT
