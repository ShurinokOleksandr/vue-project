<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';
import { defineAsyncComponent } from 'vue';
import { Header , Footer} from '@/layouts';

import './assets/index.css';

const isSmallScreen = useMediaQuery('(max-width:768px)')


const MobileFooter = defineAsyncComponent(() => import('./layouts/mobile-footer/MobileFooter.vue'));

</script>

<template>
    <div class="bg-backgroundMain relative">
        <router-link to="/">home</router-link>
        <router-link to="/catalog">catalog</router-link>
        <Header/>
        <RouterView/>
        <Footer />
    </div>
    <component
        v-if="isSmallScreen"
        :is="MobileFooter"
    />
</template>

<style scoped>

</style>
