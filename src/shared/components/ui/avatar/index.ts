import { type VariantProps, cva } from 'class-variance-authority'

export { default as AvatarFallback } from './AvatarFallback.vue'
export { default as AvatarImage } from './AvatarImage.vue' 
export { default as Avatar } from './Avatar.vue'

export const avatarVariant = cva(
  'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden',
  {
    variants: {
      size: {
        base: 'h-16 w-16 text-2xl',
        lg: 'h-32 w-32 text-5xl',
        sm: 'h-10 w-10 text-xs',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
  },
)

export type AvatarVariants = VariantProps<typeof avatarVariant>
