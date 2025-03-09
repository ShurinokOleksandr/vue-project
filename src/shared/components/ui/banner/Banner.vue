<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

const isSmallScreen = useMediaQuery('(max-width:768px)')

</script>

<template>
    <div class="bg-white relative xl:h-[200px] md:h-40 sm:h-20 mb-20">
        <img class="absolute w-full h-full object-cover" src="@/assets/banner-img/banner.png" loading="lazy" alt="Banner">
        <div class="container flex items-center  md:justify-center sm:justify-center  h-full gap-x-[8px]">
            <template v-if="!isSmallScreen">
                <div>
                    <img
                        class="lg:w-full lg:h-full md:w-[198px] lg:mt-0 md:mt-10 md:h-[132px] relative z-0 object-contain"
                        src="@/assets/banner-img/banner-products.png"
                        loading="lazy"
                        alt="Banner"
                    >
                </div>
            </template>
            <p class="relative  lg:text-2xl_bold lg:mt-0 md:mt-5 md:text-lg_bold sm:text-md_bold text-surfaceText">
                Доставка бесплатно от 1000 ₴
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>