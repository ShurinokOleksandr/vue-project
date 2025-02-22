<script setup lang="ts">
import { ChevronDownIcon, Button } from '@/shared/components';

import { type ProductListProps } from './types'
defineProps<ProductListProps>();

</script>


<template>
    <div class="flex items-center justify-between">
        <p class="xl:text-md_header  text-sm_header text-surfaceText">{{listName}}</p>
        <Button class="max-w-52 relative flex items-center gap-4 snake-border" variant="ghost" size="custom">
            <p class="hover-underline-animation left text-sm text-grayscale-hardest">{{fullListName}}</p>
            <ChevronDownIcon class="-rotate-90" />
        </Button>
    </div>
</template>
