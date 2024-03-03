'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { animate } from "framer-motion"
import { useEffect } from "react"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const inValid = props["aria-invalid"]
    const valid = !props["aria-invalid"] && props.value !== ""

    useEffect(() => {
      if (inValid) {
        animate("textarea", { x: [0, 10, 0, -10, 0] }, { ease: "linear", duration: 0.5 , x: { duration: 0.25 }})
      }
    }, [inValid])
    
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full border-b-[3px] border-secondary dark:border-secondary bg-transparent pr-10 py-7 text-2xl ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
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
Textarea.displayName = "Textarea"

export { Textarea }
