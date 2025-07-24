'use client'

import { useEffect, useState } from 'react'
import { User } from '@/types/user'
import { getUsers } from '@/lib/api'
import { UserCard } from '@/components/ui/user-card'
import { UserTable } from '@/components/ui/user-table'
import { ErrorDisplay, EmptyState } from '@/components/ui/error-display'
import { UserCardSkeleton, UserTableSkeleton } from '@/components/ui/loading-skeleton'

interface UserListContentProps {
  viewMode: 'cards' | 'table'
}

export function UserListContent({ viewMode }: UserListContentProps) {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      setError(null)
      const userData = await getUsers()
      setUsers(userData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load users')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return viewMode === 'table' ? (
      <UserTableSkeleton />
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <UserCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <ErrorDisplay
        title="Failed to Load Users"
        message={error}
        onRetry={fetchUsers}
      />
    )
  }

  if (users.length === 0) {
    return (
      <EmptyState
        title="No Users Found"
        description="There are no users in the system yet."
      />
    )
  }

  if (viewMode === 'table') {
    return <UserTable users={users} />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
} 