<script setup lang="ts">

import { ProductList } from '@/modules/product-list';
import { Banner } from '@/shared/components/ui';
import { Article } from '@/modules/article';
import { ref } from 'vue';

const rating = ref(4)

</script>

<template>
    <div class="">

        <!--banner-->
        <Banner/>
        <div class="container p-0 flex flex-col gap-[104px] mt-20">
            <ProductList full-list-name="Все акции" list-name="Акции" />
            <ProductList full-list-name="Все новинки" list-name="Новинки" />
            <ProductList full-list-name="Все покупки" list-name="Покупали раньше" />
        </div>
        <div>
            <Article full-list-name="Все статьи" list-name="Статьи"/>
        </div>
    </div>
</template>

<style scoped>
</style>