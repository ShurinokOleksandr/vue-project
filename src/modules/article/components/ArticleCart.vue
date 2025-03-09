<script setup lang="ts">

import { useElementHover } from '@vueuse/core';
import { Button } from '@/shared/components';
import { ref } from 'vue';
const cartRefHover = ref()
const isCartHover = useElementHover(cartRefHover)
</script>

<template>
    <div class="bg-white max-w-[376px] rounded shadow-default-xs overflow-hidden hover:shadow-primary-m transition-shadow  md:h-[420px] h-[300px]" ref="cartRefHover">
        <img class="object-cover w-full xl:h-[162px] md:h-[156px] h-[96px]" src="/src/assets/artImg.png" alt="article img" loading="lazy">
        <div class="flex flex-col p-[10px] justify-between xl:h-[258px] md:h-[264px] h-[204px]">
            <div class="flex flex-col gap-y-[10px]">
                <p class="xl:text-xs text-xs_mob text-grayscale-hard line-clamp-1">05.03.2021</p>
                <p class="xl:text-xs_header text-xs_header_mob text-surfaceText md:line-clamp-3 line-clamp-2">
                    Режим использования масок и перчаток на территории магазинов
                </p>
                <p class="xl:text-sm text-sm_mob text-surfaceText xl:line-clamp-4 md:line-clamp-5 line-clamp-3">
                    Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.
                </p>
            </div>
            <Button :variant="isCartHover ? 'secondary' : 'secondary-disable'" size="medium">
                <p>
                    Подробнее
                </p>
            </Button>
        </div>
    </div>
</template>

<style scoped>

</style>