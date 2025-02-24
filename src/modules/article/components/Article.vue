<script setup lang="ts">
import { type ProductListProps, HeaderList } from '@/shared/components';

import ArticleCart from './ArticleCart.vue';

defineProps<ProductListProps>();

</script>

<template>
    <div class="  flex flex-col gap-4 h-full">
        <header-list :list-name="listName" :all-list="allList" />
        <div class="flex md:flex-row flex-col justify-between gap-4 mt-2  h-full">
            <article-cart/>
            <article-cart/>
            <article-cart/>
        </div>
    </div>
</template>

<style scoped>

</style>