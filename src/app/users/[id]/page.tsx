import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { getUser } from '@/lib/api'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Phone, Globe, Building, MapPin, User as UserIcon } from "lucide-react"
import Link from "next/link"
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
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <Badge variant="outline">ID: {user.id}</Badge>
            </div>
            <p className="text-lg text-muted-foreground">@{user.username}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="w-5 h-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">{user.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Website</p>
                  <a 
                    href={`https://${user.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                Company
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium">Company Name</p>
                <p className="text-sm text-muted-foreground">{user.company.name}</p>
              </div>
              
                             <div>
                 <p className="text-sm font-medium">Catchphrase</p>
                 <p className="text-sm text-muted-foreground italic">&ldquo;{user.company.catchPhrase}&rdquo;</p>
               </div>
              
              <div>
                <p className="text-sm font-medium">Business</p>
                <p className="text-sm text-muted-foreground">{user.company.bs}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Street Address</p>
                  <p className="text-sm text-muted-foreground">
                    {user.address.street}, {user.address.suite}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {user.address.city}, {user.address.zipcode}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium">Coordinates</p>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Latitude</p>
                      <p className="text-sm font-mono">{user.address.geo.lat}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Longitude</p>
                      <p className="text-sm font-mono">{user.address.geo.lng}</p>
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
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Users
          </Link>
        </Button>
      </div>

      <Suspense fallback={<UserDetailSkeleton />}>
        <UserDetail userId={params.id} />
      </Suspense>
    </div>
  )
} 