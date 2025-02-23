<script setup lang="ts">
import { type ProductListProps, HeaderList } from '@/shared/components';

import ArticleCart from './ArticleCart.vue';

defineProps<ProductListProps>();

</script>

<template>
    <div class="container  flex flex-col gap-4 mt-20  h-full">
        <header-list :full-list-name="fullListName" :list-name="listName" />
        <div class="flex md:flex-row flex-col justify-between gap-4 mt-2  h-full">
            <article-cart/>
            <article-cart/>
            <article-cart/>
        </div>
    </div>
</template>

<style scoped>

</style>