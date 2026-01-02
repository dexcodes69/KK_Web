import * as React from "react"

const RadioGroupItem = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={`peer aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground ${className}`}
        {...props}
        ref={ref}
      />
    )
  },
)

const RadioGroup = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={`flex flex-col space-y-1.5 ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)

RadioGroup.displayName = "RadioGroup"
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
