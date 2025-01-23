import * as React from "react"
import { Input as ShadcnInput } from "@/components/ui/input"
// import { Input as ShadcnInput } from "../components/ui/input"
import "@/index.css"

export interface InputProps extends React.ComponentProps<"input"> {}


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <>
      <ShadcnInput ref={ref} {...props} />
    </>
  }
)

export { Input };