import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from 'src/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all duration-200 ease-linear focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'sm:text-start text-sm lg:text-[18px] text-white bg-red-45 hover:bg-red-hover',
        secondary:
          ' sm:text-start text-sm lg:text-[18px] border-black-15 border text-white bg-black-8 hover:bg-black-15',
        link: ' text-white text-2xl bg-transparent hover:bg-black-15',
        icon: 'border-black-15 border hover:bg-black-6',
      },
      size: {
        default: 'rounded-lg px-6 py-4',
        sm: 'rounded-md px-4 py-2',
        icon: 'rounded-md h-8 w-8 ',
        'full-sercle': 'rounded-full p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
