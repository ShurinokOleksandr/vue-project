<script setup lang="ts">
import type { PaginationNextProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ChevronRight } from 'lucide-vue-next'
import { Button } from '@/shared/components';
import { PaginationNext } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ class?: HTMLAttributes['class'] } & PaginationNextProps>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
    <PaginationNext v-bind="delegatedProps">
        <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
            <slot>
                <ChevronRight class="h-4 w-4" />
            </slot>
        </Button>
    </PaginationNext>
</template>
