<script setup lang="ts">

import { Banner, Button } from '@/shared/components/ui';
import { ChevronDownIcon } from '@/shared/components';
import { Product } from '@/modules/product';
import { ref } from 'vue';

const rating = ref(4)

</script>

<template>
    <div class="">

        <!--banner-->
        <Banner/>
        <div class="container mt-20">
            <div class="flex flex-col gap-[120px]">
                <!--Акции-->
                <div class="flex flex-col gap-10 ">
                    <div class="container flex items-center justify-between">
                        <p class="text-md_header text-surfaceText">Акции</p>
                        <Button class="max-w-52 relative flex items-center gap-4 snake-border" variant="ghost" size="custom">
                            <p class="hover-underline-animation left text-s text-grayscale-hardest">Все акции</p>
                            <ChevronDownIcon class="-rotate-90" />
                        </Button>
                    </div>
                    <!--Product list -->
                    <div class="flex flex-wrap justify-between">
                        <!--Product Card-->
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-20">
            <div class="flex flex-col gap-[120px]">
                <!--Акции-->
                <div class="flex flex-col gap-10 ">
                    <div class="flex items-center justify-between">
                        <p class="text-md_header text-surfaceText">Новые</p>
                        <Button class="max-w-52 relative flex items-center gap-4 snake-border" variant="ghost" size="custom">
                            <p class="hover-underline-animation left text-s text-grayscale-hardest">Все Новые</p>
                            <ChevronDownIcon class="-rotate-90" />
                        </Button>
                    </div>
                    <!--Product list -->
                    <div class="flex flex-wrap justify-between">
                        <!--Product Card-->
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-20">
            <div class="flex flex-col gap-[120px]">
                <!--Акции-->
                <div class="flex flex-col gap-10 ">
                    <div class="flex items-center justify-between">
                        <p class="text-md_header text-surfaceText">Ранее просмотренные</p>
                        <Button class="max-w-52 relative flex items-center gap-4 snake-border" variant="ghost" size="custom">
                            <p class="hover-underline-animation left text-s text-grayscale-hardest">Все просмотренные</p>
                            <ChevronDownIcon class="-rotate-90" />
                        </Button>
                    </div>
                    <!--Product list -->
                    <div class="flex flex-wrap justify-between">
                        <!--Product Card-->
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
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