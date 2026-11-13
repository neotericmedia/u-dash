import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  /**
   * Whether the logo should be a clickable link to the home page
   * @default true
   */
  linkToHome?: boolean
  /**
   * Size variant of the logo
   * @default "default"
   */
  size?: "sm" | "default" | "lg"
  /**
   * Whether to show the text label next to the logo
   * @default true
   */
  showLabel?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Additional CSS classes for the label text
   */
  labelClassName?: string
}

const sizeMap = {
  sm: { width: 24, height: 24, textClass: "text-base" },
  default: { width: 32, height: 32, textClass: "text-lg" },
  lg: { width: 48, height: 48, textClass: "text-2xl" },
}

/**
 * Logo component for the U-Dash application
 * Displays the brand logo with optional text label and home link
 * 
 * @example
 * ```tsx
 * // Default logo with link and label
 * <Logo />
 * 
 * // Small logo without link
 * <Logo size="sm" linkToHome={false} />
 * 
 * // Logo without label
 * <Logo showLabel={false} />
 * ```
 */
export function Logo({
  linkToHome = true,
  size = "default",
  showLabel = true,
  className,
  labelClassName,
}: LogoProps) {
  const { width, height, textClass } = sizeMap[size]

  const logoContent = (
    <div 
      className={cn(
        "flex items-center gap-2",
        linkToHome && "transition-opacity hover:opacity-80",
        className
      )}
      data-testid="logo"
    >
      <Image
        src="/u-dash-logo.svg"
        alt="U-Dash Logo"
        width={width}
        height={height}
        priority
        className="flex-shrink-0"
      />
      {showLabel && (
        <span 
          className={cn(
            "font-semibold",
            textClass,
            labelClassName
          )}
          data-testid="logo-label"
        >
          u-dash
        </span>
      )}
    </div>
  )

  if (linkToHome) {
    return (
      <Link 
        href="/" 
        aria-label="Go to home page"
        data-testid="logo-link"
      >
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
