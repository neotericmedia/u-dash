'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumb() {
  const pathname = usePathname()
  
  // Generate breadcrumb items based on pathname
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = []
    
    // Home is always first
    items.push({ label: "Home", href: "/" })
    
    // Parse the pathname
    const segments = pathname.split("/").filter(Boolean)
    
    if (segments.length === 0) {
      return items
    }
    
    // Build breadcrumbs from segments
    let currentPath = ""
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Format the label
      let label = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      
      // Handle special cases
      if (segment === "new") {
        label = "New User"
      } else if (segment === "users" && index === 0) {
        // Skip "users" as it's the same as home
        return
      } else if (!isNaN(Number(segment))) {
        label = `User #${segment}`
      }
      
      items.push({ label, href: currentPath })
    })
    
    return items
  }
  
  const breadcrumbs = getBreadcrumbs()
  
  // Don't show breadcrumbs on home page
  if (pathname === "/") {
    return null
  }
  
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1
          const isFirst = index === 0
          
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              )}
              {isLast ? (
                <span 
                  className="font-medium text-foreground flex items-center gap-1.5"
                  aria-current="page"
                >
                  {isFirst && <Home className="w-4 h-4" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-foreground transition-colors flex items-center gap-1.5",
                    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm px-1"
                  )}
                >
                  {isFirst && <Home className="w-4 h-4" />}
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
