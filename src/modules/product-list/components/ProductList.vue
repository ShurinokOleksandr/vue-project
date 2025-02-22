<script setup lang="ts">
import { HeaderList } from '@/shared/components/ui/header-list';
import { Product } from '@/modules/product';

type ProductListProps = {
    fullListName: string;
    listName: string;
}
defineProps<ProductListProps>();
</script>

<template>
    <div class="flex flex-col gap-[120px]">
        <!--Акции-->
        <div class="flex flex-col md:gap-10 gap-4 ">
            <HeaderList :full-list-name="fullListName" :list-name="listName" />
            <!--Product list -->
            <div class="flex xl:gap-10 md:gap-8 sm:gap-4 gap-2 flex-wrap ">
                <!--Product Card-->
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    </div>

</template>

<style scoped>

</style>