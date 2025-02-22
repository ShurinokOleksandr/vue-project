<script setup lang="ts">
import { type ProductListProps, HeaderList, Button } from '@/shared/components';
defineProps<ProductListProps>();

</script>

<template>
    <div class="container  flex flex-col gap-4 mt-20">
        <HeaderList :full-list-name="fullListName" :list-name="listName" />
        <div class="flex md:flex-row flex-col justify-between gap-4 mt-2">
            <div class="bg-white max-w-[376px] rounded shadow-default-xs overflow-hidden">
                <img src="/src/assets/artImg.png" alt="article img">
                <div class="flex flex-col gap-y-[10px] p-[10px] mt-[10px]">
                    <p class="text-xs_mob text-grayscale-hard">05.03.2021</p>
                    <p class="text-xs_header_mob text-surfaceText">
                        Режим использования масок и перчаток на территории магазинов
                    </p>
                    <p class="text-s_mob text-surfaceText  xl:line-clamp-5 line-clamp-3 ">
                        Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.
                    </p>
                    <Button variant="secondary" size="medium" class="">
                        <p>
                            Подробнее
                        </p>
                    </Button>
                </div>
            </div>
            <div class="bg-white max-w-[376px] rounded shadow-default-xs overflow-hidden">
                <img src="/src/assets/artImg.png" alt="article img">
                <div class="flex flex-col gap-y-[10px] p-[10px] mt-[10px]">
                    <p class="text-xs_mob text-grayscale-hard">05.03.2021</p>
                    <p class="text-xs_header_mob text-surfaceText">
                        Режим использования масок и перчаток на территории магазинов
                    </p>
                    <p class="text-s_mob text-surfaceText  xl:line-clamp-5 line-clamp-3 ">
                        Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.
                    </p>
                    <Button variant="secondary" size="medium" class="">
                        <p>
                            Подробнее
                        </p>
                    </Button>
                </div>
            </div>
            <div class="bg-white max-w-[376px] rounded shadow-default-xs overflow-hidden">
                <img src="/src/assets/artImg.png" alt="article img">
                <div class="flex flex-col gap-y-[10px] p-[10px] mt-[10px]">
                    <p class="text-xs_mob text-grayscale-hard">05.03.2021</p>
                    <p class="text-xs_header_mob text-surfaceText">
                        Режим использования масок и перчаток на территории магазинов
                    </p>
                    <p class="text-s_mob text-surfaceText  xl:line-clamp-5 line-clamp-3 ">
                        Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.
                    </p>
                    <Button variant="secondary" size="medium" class="">
                        <p>
                            Подробнее
                        </p>
                    </Button>
                </div>
            </div>


        </div>

    </div>
</template>

<style scoped>

</style>