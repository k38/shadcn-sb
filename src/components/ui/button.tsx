import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "micoui-inline-flex micoui-items-center micoui-justify-center micoui-gap-2 micoui-whitespace-nowrap micoui-rounded-md micoui-text-sm micoui-font-medium micoui-ring-offset-background micoui-transition-colors focus-visible:micoui-outline-none focus-visible:micoui-ring-2 focus-visible:micoui-ring-ring focus-visible:micoui-ring-offset-2 disabled:micoui-pointer-events-none disabled:micoui-opacity-50 [&_svg]:micoui-pointer-events-none [&_svg]:micoui-size-4 [&_svg]:micoui-shrink-0",
  // "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // default: "bg-primary text-primary-foreground hover:bg-primary/90",
        default: "micoui-bg-primary micoui-text-primary-foreground hover:micoui-bg-primary/90",
        destructive:
          "micoui-bg-destructive micoui-text-destructive-foreground hover:micoui-bg-destructive/90",
          // "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "micoui-border micoui-border-input micoui-bg-background hover:micoui-bg-accent hover:micoui-text-accent-foreground",
          // "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "micoui-bg-secondary micoui-text-secondary-foreground hover:micoui-bg-secondary/80",
          // "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:micoui-bg-accent hover:micoui-text-accent-foreground",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "micoui-text-primary micoui-underline-offset-4 hover:micoui-underline",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "micoui-h-10 micoui-px-4 micoui-py-2",
        sm: "micoui-h-9 micoui-rounded-md micoui-px-3",
        lg: "micoui-h-11 micoui-rounded-md micoui-px-8",
        icon: "micoui-h-10 micoui-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
