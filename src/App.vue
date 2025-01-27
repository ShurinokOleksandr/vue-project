<script setup lang="ts">
import Header from '@/layouts/header/Header.vue';

import './assets/index.css';

</script>
<template>


    <Header/>
    <RouterLink to="/catalog">catalog</RouterLink>
    <br>
    <RouterLink to="/">home</RouterLink>
    <RouterView/>
</template>

<style scoped>

</style>
