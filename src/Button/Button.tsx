import * as React from "react"
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "@/components/ui/button"
// import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "../components/ui/button"
import "@/index.css"

export interface ButtonProps extends ShadcnButtonProps {}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <>
      <ShadcnButton ref={ref} {...props}>{props.children}</ShadcnButton>
    </>
  }
)

export { Button };