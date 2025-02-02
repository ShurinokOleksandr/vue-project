import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-s transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none ',
  {
    variants: {
      variant: {
        secondary:
          'bg-secondary text-secondaryText  gap-2 disabled:text-secondary disabled:bg-secondaryMuted transition-opacity duration-300 hover:opacity-85',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        default:
          'bg-primary text-primary-foreground shadow ',
        link: 'text-primary underline-offset-4 hover:underline',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      }, 
      size: {
        lg: 'h-10 rounded-md px-8',
        sm: 'h-8 rounded-md px-3',
        default: 'h-9 px-4 py-2',
        medium:'w-[140px] h-10',
        icon: 'h-10 w-10',
        custom:'',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)






export type ButtonVariants = VariantProps<typeof buttonVariants>
