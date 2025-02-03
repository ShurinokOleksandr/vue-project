<script setup lang="ts">

import { ChevronDownIcon, SaveIcon } from '@/shared/components';
import { Banner, Button, Rating } from '@/shared/components/ui';
import { buttonVariants } from '@/shared/components/ui/button';
import { ref } from 'vue';
const rating = ref(4)

</script>

<template>
    <div class="">

        <!--Banner-->
        <Banner/>
        <div class="container mt-20">
            <div class="flex flex-col gap-[120px]">
                <!--Акции-->
                <div class="flex flex-col gap-10">
                    <div class="flex items-center justify-between">
                        <p class="text-md_header text-surfaceText">Акции</p>
                        <Button class=" relative flex items-center gap-4 snake-border" variant="ghost" size="medium">
                            <p class="hover-underline-animation left text-s text-grayscale-hardest">Все акции</p>
                            <ChevronDownIcon class="-rotate-90" />
                        </Button>
                    </div>
                    <!--Product list -->
                    <div class="flex flex-wrap gap-10">
                        <!--Product Card-->
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
                <!--Новинки-->
                <div class="flex flex-col gap-10">
                    <div class="flex items-center justify-between">
                        <p class="text-md_header text-surfaceText">Новинки</p>
                        <Button class=" relative flex items-center gap-4 snake-border" variant="ghost" size="medium">
                            <p class="hover-underline-animation left text-s text-grayscale-hardest">Все акции</p>
                            <ChevronDownIcon class="-rotate-90" />
                        </Button>
                    </div>
                    <!--Product list -->
                    <div class="flex flex-wrap gap-10">
                        <!--Product Card-->
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
                <!--Покупали раньше-->
                <div class="flex flex-col gap-10">
                    <div class="flex items-center justify-between">
                        <p class="text-md_header text-surfaceText">Покупали раньше</p>
                        <Button class=" relative flex items-center gap-4 snake-border" variant="ghost" size="medium">
                            <p class="hover-underline-animation left text-s text-grayscale-hardest">Все акции</p>
                            <ChevronDownIcon class="-rotate-90" />
                        </Button>
                    </div>
                    <!--Product list -->
                    <div class="flex flex-wrap gap-10">
                        <!--Product Card-->
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>
                        <div class="bg-white shadow-default-xs w-[272px] h-[349px]">
                            <div class="relative">
                                <img src="/src/assets/blini.jpg" alt="product">
                                <!--Ставить условие наличия скидки-->
                                <div class="absolute bottom-[10px]  left-[10px] bg-primary rounded text-s text-primaryText px-2 py-1">
                                    -50%
                                </div>
                                <div class="absolute top-2 right-2 w-8 h-8 bg-grayscale-lightest flex items-center justify-center rounded">
                                    <SaveIcon/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 p-2">
                                <div>
                                    <div class="flex justify-between items-center">
                                        <!-- Условие на рендер , если нету скидки скрывать первое и второе должно попадать вначало-->
                                        <p class="text-m_bold">44,50 ₴</p>
                                        <p class="text-s text-grayscale-hardest">50,50 ₴</p>
                                    </div>
                                    <!-- Условие на рендер , если нету скидки весь блок убрать-->
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-grayscale-light">Картой</p>
                                        <p class="text-xs text-grayscale-light">Обычная</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="w-[256px] h-[48px] text-s text-surfaceText line-clamp-2">
                                        Г/Ц Блинчики с мясомsss sвес, Россия Г/Ц Блинчики с мясом вес, Россия
                                        Г/Ц Блинчики с мясомss вес, Россия Г/Ц Блинчики с мясом вес, Россия
                                    </p>
                                </div>
                                <div>
                                    <Rating
                                        v-model="ratingValue"
                                        model-value="3"
                                        :max-stars="5"
                                    />
                                </div>
                                <Button
                                    variant="secondaryOutline"
                                    size="lg"
                                >
                                    В корзину
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


.hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    transition: transform 0.4s ease-out;
}

.hover-underline-animation:hover::after {
    transform: scaleX(0.9);
}

.hover-underline-animation.left::after {
    transform-origin: bottom right ;
}

.hover-underline-animation.left:hover::after {
    transform-origin: bottom left;
}


</style>