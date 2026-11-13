import React from 'react';
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface BackButtonProps {
  fallbackHref: string
  label?: string
  className?: string
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

/**
 * BackButton component with reliable navigation pattern
 * Uses explicit fallback URLs instead of browser history APIs
 * Follows KB-0008 and KB-0009 guidelines
 */
export function BackButton({
  fallbackHref,
  label = "Back",
  className,
  variant = "outline",
  size = "sm",
}: BackButtonProps) {
  // Validate that fallbackHref is a relative path
  if (!fallbackHref.startsWith('/')) {
    console.warn(`BackButton: fallbackHref should be a relative path starting with '/', got: ${fallbackHref}`)
  }

  return (
    <Button
      variant={variant}
      size={size}
      asChild
      className={cn("gap-2", className)}
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
