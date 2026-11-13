/**
 * Design Showcase Component
 * Demonstrates the modern color palette and typography system
 */

export function DesignShowcase() {
  return (
    <div className="space-y-16 p-8">
      {/* Typography Showcase */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Typography
          </p>
          <h2 className="text-3xl font-semibold">Modern Type Scale</h2>
          <p className="text-muted-foreground max-w-2xl">
            A harmonious typography system with carefully calibrated sizes, weights, and spacing
            for optimal readability and visual hierarchy.
          </p>
        </div>

        <div className="space-y-4">
          <h1 className="text-foreground">Heading 1 - Display Large</h1>
          <h2 className="text-foreground">Heading 2 - Display Medium</h2>
          <h3 className="text-foreground">Heading 3 - Display Small</h3>
          <h4 className="text-foreground">Heading 4 - Title Large</h4>
          <h5 className="text-foreground">Heading 5 - Title Medium</h5>
          <h6 className="text-foreground">Heading 6 - Title Small</h6>
          <p className="text-base text-foreground max-w-prose">
            Body text with optimal line height and spacing. The quick brown fox jumps over the lazy dog.
            This paragraph demonstrates how body text flows naturally with proper leading and measure.
          </p>
          <p className="text-sm text-muted-foreground max-w-prose">
            Small text for supporting information, captions, and metadata.
            Still readable but clearly secondary to the main content.
          </p>
          <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
            const monospace = "for code";
          </code>
        </div>
      </section>

      {/* Color Palette Showcase */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Color Palette
          </p>
          <h2 className="text-3xl font-semibold">Professional Colors</h2>
          <p className="text-muted-foreground max-w-2xl">
            A modern color system using OKLCH for perceptually uniform colors that look great
            in both light and dark modes.
          </p>
        </div>

        {/* Brand Colors */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Brand Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch
              name="Primary"
              description="Main brand color for CTAs and interactive elements"
              className="bg-primary text-primary-foreground"
            />
            <ColorSwatch
              name="Secondary"
              description="Supporting color for secondary actions"
              className="bg-secondary text-secondary-foreground"
            />
            <ColorSwatch
              name="Accent"
              description="Accent color for highlights and emphasis"
              className="bg-accent text-accent-foreground"
            />
          </div>
        </div>

        {/* Semantic Colors */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Semantic Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch
              name="Success"
              description="Positive actions and confirmations"
              className="bg-success text-success-foreground"
            />
            <ColorSwatch
              name="Warning"
              description="Cautions and important notices"
              className="bg-warning text-warning-foreground"
            />
            <ColorSwatch
              name="Destructive"
              description="Errors and destructive actions"
              className="bg-destructive text-destructive-foreground"
            />
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Neutral Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ColorSwatch
              name="Background"
              description="Main background color"
              className="bg-background text-foreground border border-border"
            />
            <ColorSwatch
              name="Card"
              description="Elevated surface color"
              className="bg-card text-card-foreground shadow-soft"
            />
            <ColorSwatch
              name="Muted"
              description="Subtle background for less emphasis"
              className="bg-muted text-muted-foreground"
            />
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Interactive Elements
          </p>
          <h2 className="text-3xl font-semibold">Buttons & Components</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-soft">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Secondary Button
          </button>
          <button className="px-4 py-2 border border-border bg-background text-foreground rounded-lg font-medium hover:bg-accent transition-colors">
            Outline Button
          </button>
          <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Destructive Button
          </button>
        </div>
      </section>

      {/* Cards & Surfaces */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Surfaces
          </p>
          <h2 className="text-3xl font-semibold">Cards & Elevation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h4 className="font-semibold mb-2">Flat Card</h4>
            <p className="text-sm text-muted-foreground">
              Subtle border for gentle separation
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-soft">
            <h4 className="font-semibold mb-2">Soft Shadow</h4>
            <p className="text-sm text-muted-foreground">
              Gentle elevation for hover states
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-medium">
            <h4 className="font-semibold mb-2">Medium Shadow</h4>
            <p className="text-sm text-muted-foreground">
              Clear elevation for modals and dropdowns
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ColorSwatchProps {
  name: string;
  description: string;
  className: string;
}

function ColorSwatch({ name, description, className }: ColorSwatchProps) {
  return (
    <div className={`p-6 rounded-lg ${className}`}>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}
