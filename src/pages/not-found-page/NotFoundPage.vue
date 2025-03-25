<script setup lang="ts">

import {
    BreadcrumbSeparator,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    Breadcrumb
} from '@/shared/components/ui/breadcrumb';
import { useRoute } from 'vue-router';
const router = useRoute()

const pathForBreadcrumbs =  router.fullPath.split('/').filter(item => item);
console.log(pathForBreadcrumbs);
</script>

<template>
    <div class="container">
        <Breadcrumb>
            <BreadcrumbList>
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

    </div>
</template>

<style scoped>

</style>