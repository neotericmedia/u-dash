'use client'

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Users, Plus, Menu, X, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    {
      href: "/",
      label: "Users",
      icon: Users,
      description: "View all users"
    },
    {
      href: "/users/new",
      label: "New User",
      icon: Plus,
      description: "Create a new user"
    }
  ]
  
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || (pathname.startsWith("/users/") && !pathname.includes("/new"))
    }
    return pathname === href
  }
  
  const closeMobileMenu = () => setMobileMenuOpen(false)
  
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
              onClick={closeMobileMenu}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-105">
                U
              </div>
              <span className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
                u-dash
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                
                return (
                  <Button
                    key={item.href}
                    variant={active ? "secondary" : "ghost"}
                    size="sm"
                    asChild
                    className={cn(
                      "gap-2 transition-all",
                      active && "shadow-sm"
                    )}
                  >
                    <Link 
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      title={item.description}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                
                return (
                  <Button
                    key={item.href}
                    variant={active ? "secondary" : "ghost"}
                    size="sm"
                    asChild
                    className={cn(
                      "justify-start gap-3 w-full",
                      active && "shadow-sm"
                    )}
                  >
                    <Link 
                      href={item.href}
                      onClick={closeMobileMenu}
                      aria-current={active ? "page" : undefined}
                    >
                      <Icon className="w-4 h-4" />
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{item.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
