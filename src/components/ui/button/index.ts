import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'cz-inline-flex cz-items-center cz-justify-center cz-whitespace-nowrap cz-rounded-md cz-text-sm cz-font-medium cz-ring-offset-background cz-transition-colors focus-visible:cz-outline-none focus-visible:cz-ring-2 focus-visible:cz-ring-ring focus-visible:cz-ring-offset-2 disabled:cz-pointer-events-none disabled:cz-opacity-50',
  {
    variants: {
      variant: {
        default: 'cz-bg-primary cz-text-primary-foreground hover:cz-bg-primary/90',
        destructive:
          'cz-bg-destructive cz-text-destructive-foreground hover:cz-bg-destructive/90',
        outline:
          'cz-border cz-border-input cz-bg-background hover:cz-bg-accent hover:cz-text-accent-foreground',
        secondary:
          'cz-bg-secondary cz-text-secondary-foreground hover:cz-bg-secondary/80',
        ghost: 'hover:cz-bg-accent hover:cz-text-accent-foreground',
        link: 'cz-text-primary cz-underline-offset-4 hover:cz-underline',
      },
      size: {
        default: 'cz-h-10 cz-px-4 cz-py-2',
        xs: 'cz-h-7 cz-rounded cz-px-2',
        sm: 'cz-h-9 cz-rounded-md cz-px-3',
        lg: 'cz-h-11 cz-rounded-md cz-px-8',
        icon: 'cz-h-10 cz-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
