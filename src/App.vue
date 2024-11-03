<script setup lang="ts">

import LogoNameIcon from '@/components/icons/LogoNameIcon.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ref } from 'vue';

import './assets/index.css'
const ff = ref(false)

</script>

<template>
    <header
        class="bg-surface shadow-default-s py-4"
    >
        <section class="container">
            <!--   LOGO WITH MENU  -->
            <div class="flex gap-10">
                <div class="flex items-center gap-[11.41px]">
                    <LogoIcon/>
                    <LogoNameIcon />
                </div>
                <div class="w-full">
                    <Button variant="secondary" size="medium" > <MenuIcon :class="[ff ? 'fill-secondary': 'fill-secondaryText' ]"/> Каталог</Button>
                </div>
            </div>
            <!--            -->

            <!-- SEARCH BAR-->
            <div> <Input/></div>
            <div></div>
        </section>
    </header>
</template>

<style scoped>

</style>
