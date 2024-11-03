<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { type PrimitiveProps, Primitive } from 'radix-vue'
import { cn } from '@/lib/utils'

import { type ButtonVariants, buttonVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  class?: HTMLAttributes['class'] 
  size?: ButtonVariants['size']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
    <Primitive
        :class="cn(buttonVariants({ variant, size }), props.class)"
        :as-child="asChild"
        :as="as"
    >
        <slot />
    </Primitive>
</template>
