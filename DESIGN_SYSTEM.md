# Design System Documentation

## Overview

This application uses a modern, professional design system built with:
- **Color Space**: OKLCH for perceptually uniform colors
- **Typography**: Geist Sans and Geist Mono font families
- **Approach**: Mobile-first, accessible, and performance-optimized

## Color Palette

### Philosophy
The color palette is designed to feel current and professional using the OKLCH color space, which provides:
- Better perceptual uniformity than RGB/HSL
- Consistent lightness and saturation across hues
- Future-proof color definitions

### Brand Colors

#### Primary (Indigo)
- **Light mode**: `oklch(0.55 0.18 264)` - Modern, trustworthy indigo
- **Dark mode**: `oklch(0.65 0.20 264)` - Brighter for better contrast
- **Usage**: CTAs, interactive elements, primary actions

#### Secondary (Purple)
- **Light mode**: `oklch(0.95 0.015 286)` - Subtle purple accent
- **Dark mode**: `oklch(0.22 0.025 286)` - Muted purple
- **Usage**: Secondary actions, supporting UI elements

### Semantic Colors

| Color | Purpose | Light Mode | Dark Mode |
|-------|---------|------------|-----------|
| Success | Positive actions, confirmations | `oklch(0.65 0.18 152)` | `oklch(0.68 0.20 152)` |
| Warning | Cautions, alerts | `oklch(0.75 0.15 85)` | `oklch(0.78 0.17 85)` |
| Destructive | Errors, deletions | `oklch(0.58 0.22 25)` | `oklch(0.62 0.24 25)` |

### Neutral Scale
A warm gray scale with subtle hue for sophistication:
- 50-300: Backgrounds and surfaces
- 400-600: Text and borders
- 700-900: Headlines and emphasis

## Typography

### Font Families

#### Geist Sans (Primary)
- **Usage**: Body text, headings, UI elements
- **Features**: Modern, highly readable, optimized for screens
- **Loading**: Variable font for optimal performance

#### Geist Mono (Code)
- **Usage**: Code blocks, technical content, data displays
- **Features**: Clear distinction between characters

### Type Scale

| Element | Size (Mobile) | Size (Desktop) | Line Height | Letter Spacing |
|---------|--------------|----------------|-------------|----------------|
| h1 | 2.25rem | 3rem | 1.2 | -0.02em |
| h2 | 1.875rem | 2.25rem | 1.2 | -0.015em |
| h3 | 1.5rem | 1.875rem | 1.2 | -0.01em |
| h4 | 1.25rem | 1.5rem | 1.2 | 0 |
| h5 | 1.125rem | 1.25rem | 1.2 | 0 |
| Body | 1rem | 1rem | 1.75 | 0 |
| Small | 0.875rem | 0.875rem | 1.5 | 0 |

### Font Features
- **Ligatures**: Enabled for better readability (`rlig`, `liga`, `calt`)
- **Kerning**: Optimized character spacing
- **Anti-aliasing**: Subpixel rendering for crisp text

## Spacing System

Based on a 4px base unit for consistency:
```
1 = 0.25rem (4px)
2 = 0.5rem  (8px)
3 = 0.75rem (12px)
4 = 1rem    (16px)
6 = 1.5rem  (24px)
8 = 2rem    (32px)
```

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 0.25rem | Small elements, badges |
| md | 0.375rem | Inputs, small cards |
| lg | 0.5rem | Buttons, cards (default) |
| xl | 0.75rem | Large cards, modals |
| 2xl | 1rem | Hero sections, feature cards |
| full | 9999px | Pills, avatars |

## Shadows

### Soft Shadow
- **Usage**: Subtle elevation, hover states
- **CSS**: `.shadow-soft`

### Medium Shadow
- **Usage**: Cards, dropdowns, modals
- **CSS**: `.shadow-medium`

### Strong Shadow
- **Usage**: Floating elements, important overlays
- **CSS**: `.shadow-strong`

## Dark Mode

Automatic dark mode support with refined colors optimized for:
- Reduced eye strain
- Better contrast ratios (WCAG AA compliant)
- Consistent brand identity across modes

### Activation
Dark mode is handled via the `.dark` class on the `<html>` element.

## Utility Classes

### Glass Morphism
```css
.glass
```
Creates a frosted glass effect with backdrop blur.

### Gradient Backgrounds
```css
.gradient-primary  /* Primary brand gradient */
.gradient-secondary /* Secondary accent gradient */
```

### Text Wrapping
```css
.text-balance  /* Balanced text layout */
.text-pretty   /* Optimized text wrapping */
```

## Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 for normal text)
- Interactive elements have clear focus states
- Sufficient contrast in both light and dark modes

### Motion
- Respects `prefers-reduced-motion` for accessibility
- Smooth animations disabled when user prefers reduced motion

### Focus Management
- Visible focus indicators (2px outline with offset)
- Keyboard navigation fully supported
- Focus ring uses brand primary color

## Best Practices

### Do's ✅
- Use semantic color tokens (e.g., `bg-primary`, `text-destructive`)
- Leverage the spacing scale for consistent layouts
- Apply appropriate heading levels for content hierarchy
- Test components in both light and dark modes

### Don'ts ❌
- Avoid hardcoded color values
- Don't skip heading levels
- Don't use color alone to convey information
- Avoid custom shadows; use predefined tokens

## Resources

- [OKLCH Color Space](https://oklch.com/) - Color picker and documentation
- [Geist Font](https://vercel.com/font) - Typography details
- [Tailwind CSS](https://tailwindcss.com/) - Utility framework

## Implementation

The design system is implemented through:
1. **`globals.css`** - CSS custom properties and base styles
2. **`design-tokens.ts`** - TypeScript constants for programmatic access
3. **Tailwind configuration** - Utility class generation

All colors, typography, and spacing values are defined as CSS custom properties, making them easily accessible throughout the application.
