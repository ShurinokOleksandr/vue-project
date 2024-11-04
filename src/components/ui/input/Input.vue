<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  defaultValue: props.defaultValue,
  passive: true,
})
</script>


<template>
    <input :class="cn('flex outline-none rounded py-2 px-4  border bg-surface text-sm text-surfaceText disabled:cursor-not-allowed disabled:opacity-50', props.class)" v-model="modelValue">
</template>
