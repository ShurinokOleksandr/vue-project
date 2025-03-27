<script setup lang="ts">
import type { PaginationFirstProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ChevronsLeft } from 'lucide-vue-next'
import { Button } from '@/shared/components';
import { PaginationFirst } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ class?: HTMLAttributes['class'] } & PaginationFirstProps>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
    <PaginationFirst v-bind="delegatedProps">
        <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
            <slot>
                <ChevronsLeft class="h-4 w-4" />
            </slot>
        </Button>
    </PaginationFirst>
</template>
