<script setup lang="ts">
import { MobileFooter , Footer, Header } from '@/layouts';

import './assets/index.css';
</script>
<template>
    <div class="bg-backgroundMain relative">
        <Header/>
        <RouterView/>
        <Footer/>
    </div>
    <MobileFooter/>
</template>

<style scoped>

</style>
