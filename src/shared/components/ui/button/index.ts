import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none [&_svg]:pointer-events-none transition ',
  {
    variants: {
      variant: {
        secondary:
          'bg-secondary text-secondaryText  gap-2 disabled:text-secondary disabled:bg-secondaryMuted transition-opacity duration-300 hover:opacity-85',
        secondaryOutline:
            'bg-transparent text-secondary disabled:text-secondary disabled:bg-secondaryMuted duration-300 border border-secondary',
        'secondary-disable':'bg-secondaryMuted text-secondary disabled:text-secondary disabled:bg-secondaryMuted transition-opacity duration-300 ',
        destructive:
          'bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90',
        default:
          'bg-primary text-primary-foreground shadow-sm ',
        "gray-scale":'text-grayscale-hardest bg-grayscale-lightest',
        link: 'text-primary underline-offset-4 hover:underline',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        primary:'bg-primary text-primaryText ',
        outline: 'border bg-transparent',
      }, 
      size: {
        mediumIcon:'w-[140px] h-10',
        default: 'h-9 px-4 py-2',
        medium:'w-[150px] h-10',
        lg: 'h-10 w-full',
        icon: 'h-10 w-10',
        sm: 'h-8 px-3',
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
