import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "micoui-flex micoui-h-10 micoui-w-full micoui-rounded-md micoui-border micoui-border-input micoui-bg-background micoui-px-3 micoui-py-2 micoui-text-base micoui-ring-offset-background file:micoui-border-0 file:micoui-bg-transparent file:micoui-text-sm file:micoui-font-medium file:micoui-text-foreground placeholder:micoui-text-muted-foreground focus-visible:micoui-outline-none focus-visible:micoui-ring-2 focus-visible:micoui-ring-ring focus-visible:micoui-ring-offset-2 disabled:micoui-cursor-not-allowed disabled:micoui-opacity-50 md:micoui-text-sm",
          // "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
