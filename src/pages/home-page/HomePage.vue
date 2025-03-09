<script setup lang="ts">

// import { GoogleMapSection } from '@/modules/google-map-section';
// import { ProductList } from '@/modules/product-list';
import { Banner } from '@/shared/components/ui';
// import { Article } from '@/modules/article';
import { defineAsyncComponent } from 'vue';
// Определяем асинхронные компоненты
const ProductList = defineAsyncComponent(() => import('../../modules/product-list/components/ProductList.vue'));
// const GoogleMapSection = defineAsyncComponent(() => import('../../modules/google-map-section/components/GoogleMapSection.vue'));
const Article = defineAsyncComponent(() => import('../../modules/article/components/Article.vue'));
</script>

<template>
    <div>
        <banner/>
        <div class="container   flex flex-col gap-[104px]">
            <product-list all-list="Все акции" list-name="Акции" />
            <product-list all-list="Все новинки" list-name="Новинки" />
            <product-list list-name="Покупали раньше" all-list="Все покупки" />
            <!--                <google-map-section list-name="Наши магазины"/>-->
            <Article all-list="Все статьи" list-name="Статьи"/>
        </div>
    </div>
</template>

<style scoped>
</style>