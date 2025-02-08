<script setup lang="ts">

import { MinusIcon,PlusIcon, Button } from '@/shared/components';
</script>

<template>
    <Button
        class="flex justify-between items-center bg-secondary p-2"
        size="lg"
    >
        <div class="active:shadow-inner ">
            <MinusIcon/>
        </div>
        <p class="text-primaryText">5</p>
        <div class="active:shadow-inner ">
            <PlusIcon/>
        </div>
    </Button>
</template>

<style scoped>

</style>