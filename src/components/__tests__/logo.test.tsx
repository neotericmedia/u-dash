/**
 * Tests for Logo component
 * Ensures the logo renders correctly with various configurations
 */

import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Logo } from '../logo'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: any) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}))

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}))

describe('Logo Component', () => {
  it('renders with default props', () => {
    render(<Logo />)
    
    const logo = screen.getByTestId('logo')
    const logoLink = screen.getByTestId('logo-link')
    const logoLabel = screen.getByTestId('logo-label')
    
    expect(logo).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '/')
    expect(logoLabel).toHaveTextContent('u-dash')
  })

  it('renders without link when linkToHome is false', () => {
    render(<Logo linkToHome={false} />)
    
    const logo = screen.getByTestId('logo')
    const logoLink = screen.queryByTestId('logo-link')
    
    expect(logo).toBeInTheDocument()
    expect(logoLink).not.toBeInTheDocument()
  })

  it('renders without label when showLabel is false', () => {
    render(<Logo showLabel={false} />)
    
    const logo = screen.getByTestId('logo')
    const logoLabel = screen.queryByTestId('logo-label')
    
    expect(logo).toBeInTheDocument()
    expect(logoLabel).not.toBeInTheDocument()
  })

  it('renders with different size variants', () => {
    const { rerender } = render(<Logo size="sm" />)
    let image = screen.getByAltText('U-Dash Logo')
    expect(image).toHaveAttribute('width', '24')
    expect(image).toHaveAttribute('height', '24')

    rerender(<Logo size="default" />)
    image = screen.getByAltText('U-Dash Logo')
    expect(image).toHaveAttribute('width', '32')
    expect(image).toHaveAttribute('height', '32')

    rerender(<Logo size="lg" />)
    image = screen.getByAltText('U-Dash Logo')
    expect(image).toHaveAttribute('width', '48')
    expect(image).toHaveAttribute('height', '48')
  })

  it('applies custom className', () => {
    render(<Logo className="custom-class" />)
    
    const logo = screen.getByTestId('logo')
    expect(logo).toHaveClass('custom-class')
  })

  it('applies custom labelClassName', () => {
    render(<Logo labelClassName="custom-label-class" />)
    
    const label = screen.getByTestId('logo-label')
    expect(label).toHaveClass('custom-label-class')
  })

  it('includes accessibility attributes', () => {
    render(<Logo />)
    
    const logoLink = screen.getByTestId('logo-link')
    expect(logoLink).toHaveAttribute('aria-label', 'Go to home page')
    
    const image = screen.getByAltText('U-Dash Logo')
    expect(image).toBeInTheDocument()
  })

  it('renders correct logo source path', () => {
    render(<Logo />)
    
    const image = screen.getByAltText('U-Dash Logo')
    expect(image).toHaveAttribute('src', '/u-dash-logo.svg')
  })
})
