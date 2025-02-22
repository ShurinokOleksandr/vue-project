<script setup lang="ts">

import { QuantitySelector, SaveIcon, Button, Rating } from '@/shared/components';
import { useElementHover } from '@vueuse/core';
import { ref } from 'vue';


const ratingValue = ref(3);
const refButtonHover = ref()
const isButtonHover = useElementHover(refButtonHover)
const isLiked = ref(true)
const addToCart = () => isLiked.value = !isLiked.value


</script>

<template>
    <div class="bg-white rounded shadow-default-xs xl:w-[17rem] md:w-[14rem] sm:w-[10rem] xl:h-[349px] h-full xl:last:block md:last:hidden hover:shadow-primary-m transition-shadow">
        <div class="relative">
            <img src="/src/assets/blini.jpg" alt="product">
            <!--Ставить условие наличия скидки-->
            <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-sm text-primaryText px-2 py-1">
                -50%
            </div>
            <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded hover:bg-primaryMuted transition">
                <SaveIcon fill-rule="evenodd"
                          clip-rule="evenodd"
                          fill="red" />
            </div>
        </div>
        <div class="flex flex-col gap-2 p-2">
            <div>
                <div class="flex justify-between items-center">
                    <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                    <p class="text-md_bold">44,50 ₴</p>
                    <p class="text-sm text-grayscale-hardest">50,50 ₴</p>
                </div>
                <!-- Условие на рендер , если нету скидки весь блок убрать-->
                <div class="flex justify-between items-center">
                    <p class="text-xs text-grayscale-light">Картой</p>
                    <p class="text-xs text-grayscale-light">Обычная</p>
                </div>
            </div>
            <div>
                <p class="xl:w-[16rem] md:w-[13rem] sm:w-[9rem] h-[48px] xl:text-sm text-surfaceText line-clamp-2">
                    Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                    Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                </p>
            </div>
            <div>
                <Rating
                    v-model="ratingValue"
                    :max-stars="5"
                />
            </div>
            <Button
                :variant="isButtonHover ? 'primary' : 'secondaryOutline'"
                ref="refButtonHover"
                @click="addToCart"
                v-if="!isLiked"
                size="lg"
            >
                В корзину
            </Button>
            <QuantitySelector @click="addToCart" v-else/>
        </div>
    </div>

</template>

<style scoped>

</style>