import React from 'react';
import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserListContent } from './users/user-list-content'
import { UserCardSkeleton, UserTableSkeleton } from '@/components/ui/loading-skeleton'
import { Button } from '@/components/ui/button'
import { LayoutGrid, Table as TableIcon, Plus } from 'lucide-react'
import Link from 'next/link'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>
}) {
  const params = await searchParams
  const viewMode = params.view === 'table' ? 'table' : 'cards'

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              User Management
            </h1>
            <p className="mt-2 text-muted-foreground">
              View and manage all users in the system
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm" asChild>
              <Link href="/users/new">
                <Plus className="w-4 h-4" />
                New User
              </Link>
            </Button>
          </div>
        </div>

        <Card className="border-2">
          <CardHeader className="border-b bg-muted/30">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">All Users</CardTitle>
                <CardDescription className="mt-1">
                  Browse and search through user accounts
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/?view=cards">
                  <Button
                    variant={viewMode === 'cards' ? 'default' : 'outline'}
                    size="sm"
                    aria-label="Card view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/?view=table">
                  <Button
                    variant={viewMode === 'table' ? 'default' : 'outline'}
                    size="sm"
                    aria-label="Table view"
                  >
                    <TableIcon className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <Suspense fallback={
              viewMode === 'table' ? <UserTableSkeleton /> : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <UserCardSkeleton key={i} />
                  ))}
                </div>
              )
            }>
              <UserListContent viewMode={viewMode} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}