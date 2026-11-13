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
 * BackButton component with reliable navigation pattern.
 * Always uses explicit fallback URLs with router.push() instead of relying on browser history.
 * This ensures predictable, controlled navigation that keeps users within the application boundary.
 * 
 * @param fallbackHref - Required relative path (starting with '/') specifying where back navigation goes
 * @param label - Optional button label text (default: "Back")
 */
export function BackButton({
  fallbackHref,
  label = "Back",
  className,
  variant = "outline",
  size = "sm",
}: BackButtonProps) {
  // Validate that fallback is a relative path to prevent open redirect vulnerabilities
  if (!fallbackHref.startsWith('/')) {
    console.warn('BackButton: fallbackHref should be a relative path starting with "/"')
  }

  return (
    <Button
      variant={variant}
      size={size}
      asChild
      className={cn("gap-2", className)}
      aria-label={`${label} to ${fallbackHref}`}
      data-testid="back-button"
    >
      <Link href={fallbackHref}>
        <ArrowLeft className="w-4 h-4" />
        {label}
      </Link>
    </Button>
  )
}
