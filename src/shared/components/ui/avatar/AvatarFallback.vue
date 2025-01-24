<script setup lang="ts">
import { type AvatarFallbackProps, AvatarFallback } from 'radix-vue'

const props = defineProps<AvatarFallbackProps>()
</script>

<template>
    <AvatarFallback v-bind="props"> 
        <slot />
    </AvatarFallback>
</template>
