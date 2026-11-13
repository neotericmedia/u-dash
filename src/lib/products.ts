import { Product } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Sourdough Bread',
    description: 'Traditional artisan sourdough with a crispy crust and soft, tangy interior. Made with our century-old starter.',
    price: 6.50,
    category: 'bread',
    image: '🍞',
    inStock: true,
    allergens: ['gluten']
  },
  {
    id: '2',
    name: 'Croissant',
    description: 'Buttery, flaky French croissant baked fresh daily. Perfect with your morning coffee.',
    price: 3.75,
    category: 'pastry',
    image: '🥐',
    inStock: true,
    allergens: ['gluten', 'dairy']
  },
  {
    id: '3',
    name: 'Chocolate Cake',
    description: 'Rich, moist chocolate cake with velvety chocolate ganache frosting. A chocolate lover\'s dream.',
    price: 28.00,
    category: 'cake',
    image: '🍰',
    inStock: true,
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '4',
    name: 'Baguette',
    description: 'Classic French baguette with a golden crust and airy crumb. Baked multiple times daily.',
    price: 4.25,
    category: 'bread',
    image: '🥖',
    inStock: true,
    allergens: ['gluten']
  },
  {
    id: '5',
    name: 'Chocolate Chip Cookies',
    description: 'Soft-baked cookies loaded with premium chocolate chips. Sold by the half dozen.',
    price: 8.50,
    category: 'cookie',
    image: '🍪',
    inStock: true,
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '6',
    name: 'Cinnamon Roll',
    description: 'Oversized cinnamon rolls with cream cheese frosting. Warm, gooey, and irresistible.',
    price: 5.25,
    category: 'pastry',
    image: '🥯',
    inStock: true,
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '7',
    name: 'Blueberry Muffin',
    description: 'Moist muffins bursting with fresh blueberries and a sweet crumb topping.',
    price: 3.50,
    category: 'pastry',
    image: '🧁',
    inStock: true,
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '8',
    name: 'Birthday Cake',
    description: 'Custom-decorated vanilla layer cake with buttercream frosting. Order 24 hours in advance.',
    price: 45.00,
    category: 'cake',
    image: '🎂',
    inStock: false,
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '9',
    name: 'Pretzel',
    description: 'Soft Bavarian-style pretzel with coarse salt. Served with honey mustard.',
    price: 4.00,
    category: 'bread',
    image: '🥨',
    inStock: true,
    allergens: ['gluten']
  },
  {
    id: '10',
    name: 'Donut Assortment',
    description: 'Mixed dozen of glazed, chocolate, and specialty donuts. Selection varies daily.',
    price: 15.00,
    category: 'pastry',
    image: '🍩',
    inStock: true,
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '11',
    name: 'Apple Pie',
    description: 'Classic homemade apple pie with flaky crust and cinnamon-spiced apple filling.',
    price: 22.00,
    category: 'special',
    image: '🥧',
    inStock: true,
    allergens: ['gluten', 'dairy']
  },
  {
    id: '12',
    name: 'Sandwich Loaf',
    description: 'Wholesome whole wheat sandwich bread, perfect for daily use. Sliced or unsliced.',
    price: 5.50,
    category: 'bread',
    image: '🍞',
    inStock: true,
    allergens: ['gluten']
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category)
}
