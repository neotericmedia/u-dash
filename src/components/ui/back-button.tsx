import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BackButtonProps {
  fallbackHref: string
  label?: string
  className?: string
}

export function BackButton({ fallbackHref, label = "Back", className }: BackButtonProps) {
  // Validate that fallbackHref is a relative path to prevent open redirect vulnerabilities
  const isValidFallback = fallbackHref.startsWith('/')
  const href = isValidFallback ? fallbackHref : '/'

  if (!isValidFallback) {
    console.warn(`BackButton: Invalid fallbackHref "${fallbackHref}". Must be a relative path starting with '/'. Defaulting to '/'.`)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      asChild
      className={className}
      aria-label={label}
      data-testid="back-button"
    >
      <Link href={href}>
        <ArrowLeft className="w-4 h-4" />
        {label}
      </Link>
    </Button>
  )
}