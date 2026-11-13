import React from 'react';
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
    <Link href={`/users/${user.id}`}>
      <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 cursor-pointer border-2 h-full">
        <CardHeader className="pb-4 border-b bg-gradient-to-br from-muted/50 to-transparent">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                {user.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg leading-tight truncate">{user.name}</h3>
                <p className="text-sm text-muted-foreground truncate">@{user.username}</p>
              </div>
            </div>
            <Badge variant="outline" className="shrink-0 text-xs">#{user.id}</Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pt-5 space-y-3.5">
          <div className="flex items-center gap-3 text-sm group">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="text-muted-foreground truncate flex-1">{user.email}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm group">
            <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-muted-foreground truncate flex-1">{user.phone}</span>
          </div>

          {isDetailed && (
            <>
              <div className="flex items-center gap-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <UserIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="text-muted-foreground truncate flex-1">{user.website}</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Building className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="text-muted-foreground truncate flex-1">{user.company.name}</span>
              </div>
              
              <div className="pt-3 mt-3 border-t">
                <p className="text-xs font-semibold text-muted-foreground mb-2">Address:</p>
                <p className="text-sm leading-relaxed">
                  {user.address.street}, {user.address.suite}<br />
                  {user.address.city}, {user.address.zipcode}
                </p>
              </div>
            </>
          )}

          {variant === 'summary' && (
            <div className="pt-2 mt-2 border-t">
              <span className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-semibold group">
                View Details
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}