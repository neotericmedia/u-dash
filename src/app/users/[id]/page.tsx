import React from 'react';
import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getUser } from '@/lib/api'
import { BackButton } from "@/components/ui/back-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Globe, Building, MapPin, User as UserIcon } from "lucide-react"
import { UserDetailSkeleton } from '@/components/ui/loading-skeleton'

interface UserDetailPageProps {
  params: {
    id: string
  }
}

async function UserDetail({ userId }: { userId: string }) {
  try {
    const user = await getUser(userId)
    
    return (
      <div className="space-y-8">
        <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border-2">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold">{user.name}</h1>
              <Badge variant="outline" className="text-sm">ID: {user.id}</Badge>
            </div>
            <p className="text-xl text-muted-foreground">@{user.username}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center gap-2 text-lg">
                <UserIcon className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Email</p>
                  <p className="text-sm break-all">{user.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm">{user.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Website</p>
                  <a 
                    href={`https://${user.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400 break-all"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Building className="w-5 h-5" />
                Company
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Company Name</p>
                <p className="text-base font-medium">{user.company.name}</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Catchphrase</p>
                <p className="text-sm italic text-muted-foreground">&ldquo;{user.company.catchPhrase}&rdquo;</p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Business</p>
                <p className="text-sm text-muted-foreground">{user.company.bs}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-2">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="flex items-center gap-2 text-lg">
                <MapPin className="w-5 h-5" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Street Address</p>
                  <p className="text-base">
                    {user.address.street}, {user.address.suite}<br />
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">Coordinates</p>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Latitude</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">{user.address.geo.lat}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Longitude</p>
                      <p className="text-sm font-mono bg-muted px-2 py-1 rounded">{user.address.geo.lng}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error in UserDetail:', error)
    notFound()
  }
}

export default function UserDetailPage({ params }: UserDetailPageProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-4 mb-8">
        <BackButton fallbackHref="/" label="Back to Users" />
      </div>

      <Suspense fallback={<UserDetailSkeleton />}>
        <UserDetail userId={params.id} />
      </Suspense>
    </div>
  )
}