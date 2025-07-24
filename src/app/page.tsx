import { Suspense } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserListContent } from './users/user-list-content'
import { UserCardSkeleton, UserTableSkeleton } from '@/components/ui/loading-skeleton'

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string }>
}) {
  const params = await searchParams
  const viewMode = params.view === 'table' ? 'table' : 'cards'

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management Dashboard</h1>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>
            View and manage user accounts
          </CardDescription>
        </CardHeader>
        <CardContent>
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
  )
}
