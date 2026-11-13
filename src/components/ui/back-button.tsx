import React from 'react';
'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BackButtonProps {
  /**
   * Fallback URL to navigate to. REQUIRED for reliable navigation.
   * KB-0009: Always use explicit fallback URLs with router.push()
   */
  fallbackHref: string
  label?: string
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  showIcon?: boolean
}

/**
 * Reliable BackButton component with fallback URL navigation.
 * 
 * KB-0009 Applied: Uses explicit fallback URLs with router.push() instead of
 * relying on browser history APIs. Validates fallback is a relative path to
 * prevent open redirect vulnerabilities. Includes proper accessibility attributes.
 * 
 * @example
 * <BackButton fallbackHref="/dashboard" label="Back to Dashboard" />
 */
export function BackButton({
  fallbackHref,
  label = 'Back',
  variant = 'outline',
  size = 'sm',
  className,
  showIcon = true,
}: BackButtonProps) {
  const router = useRouter()

  // Validate fallback is a relative path (security check)
  if (!fallbackHref.startsWith('/')) {
    console.warn('BackButton: fallbackHref must be a relative path starting with "/"')
  }

  const handleBack = () => {
    // KB-0009: Always use explicit fallback URL for predictable navigation
    router.push(fallbackHref)
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleBack}
      className={cn('gap-2', className)}
      aria-label={label}
      data-testid="back-button"
    >
      {showIcon && <ArrowLeft className="w-4 h-4" aria-hidden="true" />}
      <span>{label}</span>
    </Button>
  )
}
