<script setup lang="ts">
import type { PaginationEllipsisProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { MoreHorizontal } from 'lucide-vue-next'
import { PaginationEllipsis } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] } & PaginationEllipsisProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
    <PaginationEllipsis v-bind="delegatedProps" :class="cn('w-9 h-9 flex items-center justify-center', props.class)">
        <slot> 
            <MoreHorizontal />
        </slot>
    </PaginationEllipsis>
</template>
