'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BackButtonProps {
  /**
   * Fallback URL to navigate to when back navigation is not available.
   * This is REQUIRED to ensure reliable navigation behavior.
   * KB-0008: Always use fallback href instead of relying on window.history.length
   */
  fallbackHref: string
  label?: string
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  showIcon?: boolean
}

/**
 * BackButton component for reliable navigation.
 * 
 * KB-0008 Applied: This component avoids using window.history.length
 * for navigation state detection. Instead, it requires a fallback href
 * and always uses router.push() to ensure predictable behavior.
 * 
 * This prevents issues where window.history.length > 1 due to external
 * browser history, causing router.back() to navigate outside the app.
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

  const handleBack = () => {
    // KB-0008: Always use fallback for safety instead of router.back()
    // This ensures users never navigate outside the app unexpectedly
    router.push(fallbackHref)
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleBack}
      className={cn('gap-2', className)}
    >
      {showIcon && <ArrowLeft className="w-4 h-4" />}
      {label}
    </Button>
  )
}
