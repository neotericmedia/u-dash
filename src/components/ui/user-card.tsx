import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, UserSummary } from "@/types/user"
import { Mail, Phone, User as UserIcon, Building } from "lucide-react"
import Link from "next/link"

interface UserCardProps {
  user: User | UserSummary
  variant?: 'summary' | 'detailed'
}

export function UserCard({ user, variant = 'summary' }: UserCardProps) {
  const isDetailed = variant === 'detailed' && 'address' in user

  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-sm text-muted-foreground">@{user.username}</p>
            </div>
          </div>
          <Badge variant="outline">ID: {user.id}</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{user.email}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{user.phone}</span>
        </div>

        {isDetailed && (
          <>
            <div className="flex items-center gap-2 text-sm">
              <UserIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{user.website}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <Building className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{user.company.name}</span>
            </div>
            
            <div className="pt-2 border-t">
              <p className="text-sm font-medium text-muted-foreground mb-1">Address:</p>
              <p className="text-sm">
                {user.address.street}, {user.address.suite}<br />
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </>
        )}

        {variant === 'summary' && (
          <Link 
            href={`/users/${user.id}`}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-3"
          >
            View Details →
          </Link>
        )}
      </CardContent>
    </Card>
  )
} 