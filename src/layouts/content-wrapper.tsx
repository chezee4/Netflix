import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'src/lib/utils'

const contentWrapperVariants = cva(
  'w-full border mx-auto rounded-xl mb-10 border-black-15',
  {
    variants: {
      variant: {
        primary: 'bg-black-10 p-[3rem_3.5rem_3rem_2.5rem]',
        secondary: 'px-5 sm:px-10 pt-10 pb-6  bg-black-10',
        form: 'bg-black-6 rounded-lg p-8',
        card: 'bg-black-6 px-6 py-10 lg:p-10',
        carousel: 'px-2 sm:px-5 md:px-10 pb-5 pt-5 sm:pt-10 bg-black-10 ',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export interface ContentWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentWrapperVariants> {
  as?: 'div' | 'aside' | 'section'
}

const ContentWrapper = React.forwardRef<HTMLDivElement, ContentWrapperProps>(
  ({ className, variant, as = 'div', ...props },ref) => {
    const Component = as

    return (
      <Component
        className={cn(contentWrapperVariants({ variant, className }))}
        {...props}
        ref={ref}
      />
    )
  },
)

ContentWrapper.displayName = 'ContentWrapper'

export { ContentWrapper, contentWrapperVariants }
