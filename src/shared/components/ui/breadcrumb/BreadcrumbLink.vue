<script lang="ts" setup>
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { Primitive } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{ class?: HTMLAttributes['class'] } & PrimitiveProps>(), {
  as: 'a',
})
</script>

<template>
    <Primitive
        :class="cn('transition-colors hover:text-foreground', props.class)" 
        :as-child="asChild"
        :as="as"
    >
        <slot />
    </Primitive>
</template>
