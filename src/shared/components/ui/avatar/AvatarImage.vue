<script setup lang="ts">
import { type AvatarImageProps, AvatarImage } from 'radix-vue'

const props = defineProps<AvatarImageProps>()
</script>

<template>
    <AvatarImage v-bind="props" class="h-full w-full object-cover" />
</template>
 