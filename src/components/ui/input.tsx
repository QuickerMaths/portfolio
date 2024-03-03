'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { animate } from "framer-motion"
import { useEffect } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const inValid = props["aria-invalid"]
    const valid = !props["aria-invalid"] && props.value !== ""

    useEffect(() => {
      if (inValid) {
        animate("input", { x: [0, 10, 0, -10, 0] }, { ease: "linear", duration: 0.5 , x: { duration: 0.25 }})
      }
    }, [inValid])

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b-[3px] border-secondary dark:border-secondary bg-transparent pr-10 py-7 text-2xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          inValid
            ? "ring-destructive border-red-500 dark:border-red-500 placeholder:text-red-500 placeholder:dark:text-red-500"
            : "focus-visible:ring-primary dark:focus-visible:ring-primary",
          valid && "border-green-500 dark:border-green-500"
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
