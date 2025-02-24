<script setup lang="ts">
import { type ProductListProps, HeaderList,Button } from '@/shared/components';
import { AdvancedMarker, GoogleMap } from 'vue3-google-map'
import { ref } from 'vue'


defineProps<ProductListProps>();
const center = { lng: 30.43361318542281, name: 'п.Щельяюр', lat: 50 };
const currentLocation = ref< typeof center>(center)
function changeLocation(location: typeof center) {
    currentLocation.value = location
    console.log(currentLocation.value)
}
const locations: typeof center[] = [
    { lng: 30.43361318542281, name:"п.Щельяюр", lat: 50 },
    { lng: 20.43361318542281, name:"д.Вертеп", lat: 30 },
    { lng: 10.43361318542281, name:"с.Краснобор", lat: 50 },
    { lng: 30.43361318542281, name:"д.Диюр", lat: 30 },

]
</script>

<template>
    <div class=" flex flex-col gap-4 h-full">
        <header-list :list-name="listName" :all-list="allList" />
        <div class="flex gap-2 flex-wrap">
            <Button
                :variant="location.name === currentLocation.name ? 'secondary' : 'gray-scale'"
                @click="() => changeLocation(location)"
                v-for="location in locations"
                :key="location.lat"
                class="text-xs"
                size="sm"
            >
                {{location.name}}
            </Button>
        </div>
        <GoogleMap
            api-key="AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao"
            style="width: 100%; height: 500px"
            :center="currentLocation"
            :zoom="5"
        >
            <AdvancedMarker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<style scoped>

</style>