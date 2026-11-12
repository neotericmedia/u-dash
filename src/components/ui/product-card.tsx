import Link from 'next/link'
import { Product } from '@/types/product'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block group">
      <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="text-5xl mb-2" aria-hidden="true">
              {product.image}
            </div>
            <div className="flex flex-col gap-1.5">
              <Badge 
                variant={product.inStock ? 'default' : 'secondary'}
                className="text-xs"
              >
                {product.inStock ? 'In Stock' : 'Pre-order'}
              </Badge>
              <Badge variant="outline" className="text-xs capitalize">
                {product.category}
              </Badge>
            </div>
          </div>
          <CardTitle className="group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            {product.allergens && product.allergens.length > 0 && (
              <span className="text-xs text-muted-foreground">
                Contains: {product.allergens.join(', ')}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
