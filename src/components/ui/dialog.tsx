import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "micoui-fixed micoui-inset-0 micoui-z-50 micoui-bg-black/80  data-[state=open]:micoui-animate-in data-[state=closed]:micoui-animate-out data-[state=closed]:micoui-fade-out-0 data-[state=open]:micoui-fade-in-0",
      // "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "micoui-fixed micoui-left-[50%] micoui-top-[50%] micoui-z-50 micoui-grid micoui-w-full micoui-max-w-lg micoui-translate-x-[-50%] micoui-translate-y-[-50%] micoui-gap-4 micoui-border micoui-bg-background micoui-p-6 micoui-shadow-lg micoui-duration-200 data-[state=open]:micoui-animate-in data-[state=closed]:micoui-animate-out data-[state=closed]:micoui-fade-out-0 data-[state=open]:micoui-fade-in-0 data-[state=closed]:micoui-zoom-out-95 data-[state=open]:micoui-zoom-in-95 data-[state=closed]:micoui-slide-out-to-left-1/2 data-[state=closed]:micoui-slide-out-to-top-[48%] data-[state=open]:micoui-slide-in-from-left-1/2 data-[state=open]:micoui-slide-in-from-top-[48%] sm:micoui-rounded-lg",
        // "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="micoui-absolute micoui-right-4 micoui-top-4 micoui-rounded-sm micoui-opacity-70 micoui-ring-offset-background micoui-transition-opacity hover:micoui-opacity-100 focus:micoui-outline-none focus:micoui-ring-2 focus:micoui-ring-ring focus:micoui-ring-offset-2 disabled:micoui-pointer-events-none data-[state=open]:micoui-bg-accent data-[state=open]:micoui-text-muted-foreground">
      {/* <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"> */}
        <X className="micoui-h-4 micoui-w-4" />
        {/* <X className="h-4 w-4" /> */}
        <span className="micoui-sr-only">Close</span>
        {/* <span className="sr-only">Close</span> */}
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "micoui-flex micoui-flex-col micoui-space-y-1.5 micoui-text-center sm:micoui-text-left",
      // "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "micoui-flex micoui-flex-col-reverse sm:micoui-flex-row sm:micoui-justify-end sm:micoui-space-x-2",
      // "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "micoui-text-lg micoui-font-semibold micoui-leading-none micoui-tracking-tight",
      // "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("micoui-text-sm micoui-text-muted-foreground", className)}
    // className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
