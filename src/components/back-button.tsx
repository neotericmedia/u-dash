'use client'

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "./ui/button"

interface BackButtonProps {
  fallbackHref?: string
  label?: string
}

export function BackButton({ fallbackHref = "/", label = "Back" }: BackButtonProps) {
  const router = useRouter()
  
  const handleBack = () => {
    // Try to go back in history, fallback to href if no history
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push(fallbackHref)
    }
  }
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleBack}
      className="gap-2"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>{label}</span>
    </Button>
  )
}
