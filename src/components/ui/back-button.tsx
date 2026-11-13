import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface BackButtonProps {
  fallbackHref: string
  label?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

/**
 * BackButton component with reliable navigation using explicit fallback URLs.
 * 
 * This component follows KB-0008 and KB-0009 patterns by avoiding unreliable
 * browser history APIs (window.history.length, router.back()) and instead
 * using explicit fallback URLs with router.push() for predictable navigation.
 * 
 * @param fallbackHref - Required relative path for back navigation (e.g., '/dashboard')
 * @param label - Optional button label text (defaults to 'Back')
 * @param className - Optional additional CSS classes
 * @param variant - Button variant style
 * @param size - Button size
 */
export function BackButton({
  fallbackHref,
  label = "Back",
  className,
  variant = "outline",
  size = "sm"
}: BackButtonProps) {
  // Validate that fallbackHref is a relative path to prevent open redirect vulnerabilities
  if (!fallbackHref.startsWith('/')) {
    console.warn(`BackButton: fallbackHref should be a relative path starting with '/'. Got: ${fallbackHref}`)
  }

  return (
    <Button
      variant={variant}
      size={size}
      asChild
      className={cn(className)}
      aria-label={label}
      data-testid="back-button"
    >
      <Link href={fallbackHref}>
        <ArrowLeft className="w-4 h-4" />
        {label}
      </Link>
    </Button>
  )
}
