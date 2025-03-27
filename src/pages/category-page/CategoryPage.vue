<script setup lang="ts">

import {
    BreadcrumbSeparator,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    Breadcrumb
} from '@/shared/components/ui/breadcrumb';
import { Slider } from '@/shared/components';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRoute()
const pathForBreadcrumbs =  router.fullPath.split('/').filter(item => item);
console.log(pathForBreadcrumbs);
const modelValue = ref([50,85,33])



</script>

<template>
    <div class="container">
        <Breadcrumb class="my-6">
            <BreadcrumbList class="text-xs text-surfaceText">
                <BreadcrumbItem >
                    <BreadcrumbLink href="/" >
                        Главная
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem v-for="pathForBreadcrumb in pathForBreadcrumbs" :key="pathForBreadcrumb">
                    <BreadcrumbSeparator />

                    <BreadcrumbLink :href="'/' + pathForBreadcrumb" >

                        {{pathForBreadcrumb}}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <div>
            <h1 class="text-lg_header text-surfaceText truncate xl:mb-[60px] md:mb-5 sm:mb-2">Удочки, удилища, спиннинги</h1>
            <div>
                {{modelValue[0]}}
            </div>
            <div>
                {{modelValue[1]}}
            </div>
            <div>
                {{modelValue[2]}}
            </div>
            <Slider
                v-model="modelValue"
                class="w-3/5"
                :max="100"
                :step="1"
            />
        </div>
    </div>
</template>

<style scoped>

</style>