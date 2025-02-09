<script setup lang="ts">
import MobileFooter from '@/layouts/mobile-footer/MobileFooter.vue';
import Header from '@/layouts/header/Header.vue';

import './assets/index.css';
</script>
<template>
    <div class="bg-backgroundMain relative">
        <Header/>
        <RouterView/>
        <MobileFooter/>
    </div>
</template>

<style scoped>

</style>
