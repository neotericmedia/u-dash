import { Logo } from '@/components/logo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Brand Guidelines Page
 * Showcases the U-Dash logo in various configurations
 * This page serves as a visual reference for developers and designers
 */
export default function BrandPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">U-Dash Brand Guidelines</h1>
        <p className="text-muted-foreground">
          Visual reference for the U-Dash logo and brand identity
        </p>
      </div>

      <div className="space-y-6">
        {/* Logo Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Logo Variants</CardTitle>
            <CardDescription>
              Different size configurations of the U-Dash logo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
              <div className="text-center">
                <Logo size="sm" linkToHome={false} />
                <p className="text-xs text-muted-foreground mt-2">Small (24x24)</p>
              </div>
              
              <div className="text-center">
                <Logo size="default" linkToHome={false} />
                <p className="text-xs text-muted-foreground mt-2">Default (32x32)</p>
              </div>
              
              <div className="text-center">
                <Logo size="lg" linkToHome={false} />
                <p className="text-xs text-muted-foreground mt-2">Large (48x48)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logo with/without Label */}
        <Card>
          <CardHeader>
            <CardTitle>Label Options</CardTitle>
            <CardDescription>
              Logo with and without text label
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
              <div className="text-center">
                <Logo linkToHome={false} showLabel={true} />
                <p className="text-xs text-muted-foreground mt-2">With Label</p>
              </div>
              
              <div className="text-center">
                <Logo linkToHome={false} showLabel={false} />
                <p className="text-xs text-muted-foreground mt-2">Without Label</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive States</CardTitle>
            <CardDescription>
              Logo as a clickable link vs static element
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
              <div className="text-center">
                <Logo linkToHome={true} />
                <p className="text-xs text-muted-foreground mt-2">
                  Clickable (hover to see effect)
                </p>
              </div>
              
              <div className="text-center">
                <Logo linkToHome={false} />
                <p className="text-xs text-muted-foreground mt-2">Static</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Information */}
        <Card>
          <CardHeader>
            <CardTitle>Brand Colors</CardTitle>
            <CardDescription>
              Primary gradient colors used in the logo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-blue-500 rounded-lg text-white">
                <p className="font-semibold">Primary Blue</p>
                <p className="text-sm opacity-90">#3b82f6</p>
                <p className="text-xs opacity-75">Tailwind: blue-500</p>
              </div>
              
              <div className="p-6 bg-purple-600 rounded-lg text-white">
                <p className="font-semibold">Primary Purple</p>
                <p className="text-sm opacity-90">#9333ea</p>
                <p className="text-xs opacity-75">Tailwind: purple-600</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>
              Code snippets for common logo implementations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Default Logo (Navigation)</p>
              <code className="text-xs">
                {`<Logo />`}
              </code>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Small Logo without Link</p>
              <code className="text-xs">
                {`<Logo size="sm" linkToHome={false} />`}
              </code>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Icon Only (Mobile)</p>
              <code className="text-xs">
                {`<Logo showLabel={false} />`}
              </code>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-2">Large Logo for Landing Pages</p>
              <code className="text-xs">
                {`<Logo size="lg" linkToHome={false} />`}
              </code>
            </div>
          </CardContent>
        </Card>

        {/* Asset Locations */}
        <Card>
          <CardHeader>
            <CardTitle>Asset Files</CardTitle>
            <CardDescription>
              Location of logo files in the project
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
              <span className="text-sm font-mono">/public/u-dash-logo.svg</span>
              <span className="text-xs text-muted-foreground">Primary Logo</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
              <span className="text-sm font-mono">/public/favicon.svg</span>
              <span className="text-xs text-muted-foreground">Browser Icon</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
              <span className="text-sm font-mono">/src/components/logo.tsx</span>
              <span className="text-xs text-muted-foreground">React Component</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
