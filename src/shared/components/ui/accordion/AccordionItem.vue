<script setup lang="ts">
import type { AccordionItemProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

 import { useForwardProps, AccordionItem } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] } & AccordionItemProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
    <AccordionItem
        v-bind="forwardedProps"
        :class="cn('border-b', props.class)"
    > 
        <slot />
    </AccordionItem>
</template>
