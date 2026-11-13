# U-Dash Logo Guidelines

## Overview
The U-Dash logo is the primary visual identifier for our user management dashboard. This document outlines proper usage and implementation.

## Logo Assets

### Files
- **Primary Logo**: `/public/u-dash-logo.svg` - Full color SVG logo (32x32)
- **Favicon**: `/public/favicon.svg` - Browser tab icon
- **Component**: `/src/components/logo.tsx` - React component wrapper

## Brand Colors
The logo uses a gradient from blue to purple:
- **Primary Blue**: `#3b82f6` (Tailwind: `blue-500`)
- **Primary Purple**: `#9333ea` (Tailwind: `purple-600`)

## Logo Component Usage

### Basic Usage
```tsx
import { Logo } from '@/components/logo'

// Default logo with link to homepage and label
<Logo />
```

### Size Variants
```tsx
// Small (24x24)
<Logo size="sm" />

// Default (32x32)
<Logo size="default" />

// Large (48x48)
<Logo size="lg" />
```

### Without Link
```tsx
// For contexts where navigation isn't needed (footers, loading screens)
<Logo linkToHome={false} />
```

### Without Label
```tsx
// Icon-only version
<Logo showLabel={false} />
```

### Custom Styling
```tsx
// Add custom classes
<Logo 
  className="my-custom-wrapper" 
  labelClassName="text-primary"
/>
```

## Implementation Locations

The logo currently appears in:
1. **Navigation Bar** (`src/components/navigation.tsx`)
   - Default size with label
   - Links to homepage
   
2. **Page Metadata** (`src/app/layout.tsx`)
   - Favicon in browser tabs
   - Apple touch icon

## Best Practices

### DO ✓
- Use the `<Logo />` component for all logo implementations
- Maintain proper spacing around the logo (minimum 8px)
- Use appropriate size variants for context
- Include the logo in the navigation header
- Ensure the logo is clickable when used for navigation

### DON'T ✗
- Don't recreate the logo inline with custom markup
- Don't modify the logo colors or gradient
- Don't distort the logo aspect ratio
- Don't use low-resolution or pixelated versions
- Don't remove accessibility attributes

## Accessibility

The logo component includes:
- `alt` text for screen readers: "U-Dash Logo"
- `aria-label` on navigation links: "Go to home page"
- `data-testid` attributes for automated testing
- Proper semantic HTML structure

## Responsive Behavior

The logo automatically adapts to different screen sizes:
- **Mobile**: Consider using `size="sm"` or `showLabel={false}`
- **Tablet/Desktop**: Default size works well

## Future Enhancements

Potential additions to consider:
- Dark mode variant (if needed)
- Animated version for loading states
- Monochrome version for print/special contexts
- Different aspect ratios for social media

## Questions?

For questions about logo usage or to request new assets, please consult with the design team or create an issue in the project repository.
