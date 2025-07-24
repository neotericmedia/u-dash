import { User } from '@/types/user'

const API_BASE = 'https://jsonplaceholder.typicode.com'

export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_BASE}/users`, {
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

export async function getUser(id: string | number): Promise<User> {
  try {
    const response = await fetch(`${API_BASE}/users/${id}`, {
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found')
      }
      throw new Error(`Failed to fetch user: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error(`Error fetching user ${id}:`, error)
    throw error
  }
} 