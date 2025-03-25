<script setup lang="ts">
import { DesignerLogoIcon, PhoneIcon } from './icons/index';
import { footerIcons, links } from '../helpers';

</script>

<template>
    <footer class=" bg-backgroundSecond bg-[url(/src/assets/bg.png)] md:mt-[60px] sm:mt-5" ref="target">
        <div class="container gap-10 md:gap-0 py-6 flex justify-between md:flex-row flex-col items-center md:items-start " >
            <div class="flex gap-10 items-center flex-col md:flex-row">
                <img src="/src/assets/logo-footer.png" loading="lazy" alt="logo">
                <ul class="flex lg:gap-10 gap-5 items-center flex-wrap flex-col md:flex-row">
                    <li
                        class="lg:text-xs text-sm_mob text-surfaceText"
                        v-for="(item) in links"
                        :key="item.name"
                    >
                        <RouterLink :to="item.path">
                            {{item.name}}
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="flex lg:gap-10 gap-2 flex-col lg:flex-row  items-center md:items-start">
                <ul class="flex lg:gap-4 gap-2 flex-wrap">
                    <li v-for="item in footerIcons" :key="item.name">
                        <component :is="item.component"/>
                    </li>
                </ul>
                <div class="flex flex-col lg:gap-6 gap-2">
                    <div class="flex gap-2 items-center">
                        <PhoneIcon/>
                        <p class="lg:text-sm text-xs text-surfaceText">+38 098 600 20 30</p>
                    </div>
                    <div class="flex gap-2 items-center">
                        <p class="text-xs text-surfaceText">Дизайн</p>
                        <DesignerLogoIcon/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

</style>