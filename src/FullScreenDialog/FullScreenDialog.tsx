"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface FullScreenDialogProps {
  trigger: React.ReactNode
  title: string
  children: React.ReactNode
}

export function FullScreenDialog({ trigger, title, children }: FullScreenDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-full w-full h-full p-0 border-none bg-background">
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between p-4 border-b">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </header>
          <main className="flex-grow p-6 overflow-auto">{children}</main>
        </div>
      </DialogContent>
    </Dialog>
  )
}

