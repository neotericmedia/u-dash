/**
 * Design Tokens
 * Central source of truth for design system values
 * Modern, professional color palette and typography scale
 */

export const colors = {
  // Brand colors
  brand: {
    primary: 'oklch(0.55 0.18 264)', // Modern indigo
    primaryForeground: 'oklch(0.99 0 0)',
    secondary: 'oklch(0.95 0.015 286)', // Complementary purple
    secondaryForeground: 'oklch(0.25 0.05 286)',
  },
  
  // Semantic colors
  semantic: {
    success: 'oklch(0.65 0.18 152)',
    successForeground: 'oklch(0.99 0 0)',
    warning: 'oklch(0.75 0.15 85)',
    warningForeground: 'oklch(0.20 0.05 85)',
    destructive: 'oklch(0.58 0.22 25)',
    destructiveForeground: 'oklch(0.99 0 0)',
    info: 'oklch(0.60 0.20 264)',
    infoForeground: 'oklch(0.99 0 0)',
  },
  
  // Neutral colors
  neutral: {
    50: 'oklch(0.99 0.002 106)',
    100: 'oklch(0.96 0.008 106)',
    200: 'oklch(0.92 0.005 106)',
    300: 'oklch(0.88 0.005 106)',
    400: 'oklch(0.70 0.015 106)',
    500: 'oklch(0.50 0.015 106)',
    600: 'oklch(0.40 0.01 106)',
    700: 'oklch(0.30 0.01 106)',
    800: 'oklch(0.20 0.01 106)',
    900: 'oklch(0.15 0.01 106)',
  },
} as const;

export const typography = {
  // Font families
  fontFamily: {
    sans: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
    mono: 'var(--font-geist-mono), "Courier New", monospace',
  },
  
  // Font sizes with improved scale
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
  },
  
  // Font weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.02em',
    tight: '-0.015em',
    normal: '0',
    wide: '0.01em',
    wider: '0.02em',
  },
} as const;

export const spacing = {
  // Refined spacing scale
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

export const shadows = {
  soft: '0 2px 8px -2px oklch(0.15 0.01 106 / 0.08), 0 4px 16px -4px oklch(0.15 0.01 106 / 0.04)',
  medium: '0 4px 16px -2px oklch(0.15 0.01 106 / 0.10), 0 8px 24px -4px oklch(0.15 0.01 106 / 0.06)',
  strong: '0 8px 32px -4px oklch(0.15 0.01 106 / 0.12), 0 16px 48px -8px oklch(0.15 0.01 106 / 0.08)',
} as const;

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slower: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Utility type for accessing design tokens
export type ColorKey = keyof typeof colors;
export type TypographyKey = keyof typeof typography;
export type SpacingKey = keyof typeof spacing;
