<script setup lang="ts">

import { GoogleMapSection } from '@/modules/google-map-section';
import { ProductList } from '@/modules/product-list';
import { Banner } from '@/shared/components/ui';
import { Article } from '@/modules/article';
</script>

<template>
    <div>
        <banner/>
        <div class="container   flex flex-col gap-[104px]">
            <product-list all-list="Все акции" list-name="Акции" />
            <product-list all-list="Все новинки" list-name="Новинки" />
            <product-list list-name="Покупали раньше" all-list="Все покупки" />
            <google-map-section list-name="Наши магазины"/>
            <Article all-list="Все статьи" list-name="Статьи"/>
        </div>
    </div>
</template>

<style scoped>
</style>