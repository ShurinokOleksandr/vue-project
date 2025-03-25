<script setup lang="ts">

import {
    BreadcrumbSeparator,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    Breadcrumb
} from '@/shared/components/ui/breadcrumb';

</script>

<template>
    <div class="container ">
        <Breadcrumb class="mt-6">
            <BreadcrumbList class="text-xs text-surfaceText">
                <BreadcrumbItem >
                    <BreadcrumbLink href="/" >
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem >
                    <BreadcrumbLink class="text-grayscale-hard" href="/" >
                        Каталог
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div class="md:mt-6 sm:mt-2 mb-5">
            <h1 class="text-xl_bold text-surfaceText md:mb-[30px] sm:mb-2 ">Каталог</h1>
            <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-rows-4 md:grid-rows-5 sm:grid-rows-8 xl:gap-10 md:gap-8 sm:gap-4">
                <div class="md:col-span-2 catalog-card catalog-card--wide  bg-[url(/src/assets/584x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">1</p>
                </div>

                <div class="catalog-card xl:col-start-3 md:col-start-3 sm:col-start-1 bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">2</p>
                </div>

                <div class="xl:col-start-4  md:col-start-1 xl:row-start-1 md:row-start-2 catalog-card  bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">3</p>
                </div>

                <div class="xl:col-start-1 md:col-start-2 md:row-start-2 catalog-card 3 bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">4</p>
                </div>

                <div class="xl:col-start-2 md:col-start-3 md:row-start-2 catalog-card bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">5</p>
                </div>

                <div class="xl:col-start-3 md:col-start-1 xl:row-start-2 md:row-start-3 catalog-card bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">6</p>
                </div>

                <div class="xl:col-start-4 md:col-start-2 xl:row-start-2 md:row-start-3 catalog-card bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">7</p>
                </div>

                <div class="xl:col-start-1  md:col-start-3 xl:row-start-3 md:row-start-3 catalog-card bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">8</p>
                </div>

                <div class="xl:col-start-2  md:col-start-1 xl:row-start-3 md:row-start-4 catalog-card bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">9</p>
                </div>

                <div class=" md:col-span-2 xl:row-start-3 md:row-start-4 catalog-card catalog-card--wide   bg-[url(/src/assets/584x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">10</p>
                </div>

                <div class="md:col-start-1  xl:row-start-4 md:row-start-5 sm:col-start-1 catalog-card bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">11</p>
                </div>

                <div class="xl:col-span-2 xl:row-start-4 md:row-start-5 sm:row-start-8 catalog-card_special bg-[url(/src/assets/584x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">12</p>
                </div>

                <div class="xl:col-start-4 xl:row-start-4  md:row-start-5 catalog-card   bg-[url(/src/assets/272x200.png)]">
                    <div class="catalog-card__overlay"></div>
                    <p class="catalog-card__title">13</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.catalog-card {
    @apply relative rounded overflow-hidden bg-cover bg-no-repeat bg-center;
}
.catalog-card_special{
    @apply  relative rounded overflow-hidden bg-cover bg-no-repeat bg-center lg:w-[584px] md:w-[224px] w-[336px] lg:h-[200px] h-[140px];
}
/* Широкая карточка */
.catalog-card--wide {
    @apply  lg:w-[584px] md:w-[480px]  w-[336px] lg:h-[200px] h-[140px];
}

/* Стандартная карточка */
.catalog-card:not(.catalog-card--wide) {
    @apply lg:w-[272px] md:w-[224px] w-[160px] lg:h-[200px] h-[140px];
}

/* Градиент-оверлей */
.catalog-card__overlay {
    @apply absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-secondary
    transition-all duration-300 ease-in-out hover:bg-gradient-to-b hover:from-transparent hover:via-transparent hover:to-primary;
}

/* Заголовок карточки */
.catalog-card__title {
    @apply absolute bottom-4 left-4 text-surface text-md text-md_bold z-10;
}
</style>