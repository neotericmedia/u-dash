import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Users, Plus } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  
  const navItems = [
    {
      href: "/",
      label: "Users",
      icon: Users
    },
    {
      href: "/users/new",
      label: "New User",
      icon: Plus
    }
  ]
  
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                U
              </div>
              <span className="font-semibold text-lg">u-dash</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href || 
                  (item.href === "/" && pathname.startsWith("/users") && pathname !== "/users/new")
                
                return (
                  <Button
                    key={item.href}
                    variant={isActive ? "secondary" : "ghost"}
                    size="sm"
                    asChild
                  >
                    <Link href={item.href} className="gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
          
          {/* <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link href="/users/new">
                <Plus className="w-4 h-4" />
                New User
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </nav>
  )
} 