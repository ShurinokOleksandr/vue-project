<script setup lang="ts">
import type { PaginationLastProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { ChevronsRight } from 'lucide-vue-next'
import { Button } from '@/shared/components';
import { PaginationLast } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ class?: HTMLAttributes['class'] } & PaginationLastProps>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
    <PaginationLast v-bind="delegatedProps">
        <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
            <slot>
                <ChevronsRight class="h-4 w-4" />
            </slot>
        </Button>
    </PaginationLast>
</template>
