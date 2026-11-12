export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'bread' | 'pastry' | 'cake' | 'cookie' | 'special'
  image: string
  inStock: boolean
  allergens?: string[]
}

export type ProductCategory = Product['category']
