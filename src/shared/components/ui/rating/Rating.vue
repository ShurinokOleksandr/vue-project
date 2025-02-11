<template>
    <div class="flex items-center">
        <!-- Контейнер для звезд -->
        <Primitive
            aria-labelledby="rating-label"
            class="flex gap-1"
            role="radiogroup"
            as="div"
        >
            <Primitive
                class="focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
                :tabindex="currentRating === n ? 0 : -1"
                :aria-checked="currentRating === n"
                @keydown.enter="setRating(n)"
                @mouseleave="hoveredStar = 0"
                @mouseover="hoveredStar = n"
                v-for="n in maxStars"
                @click="setRating(n)"
                type="button"
                role="radio"
                as="button"
                :key="n"
            >
                <svg
                    :class="[
                        'transition-colors duration-200',
                        n <= (hoveredStar || currentRating) ? 'text-primary' : 'text-grayscale-light'
                    ]"
                    xmlns="http://www.w3.org/2000/svg"
                    class="bi bi-star-fill"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    :style="size"
                >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            </Primitive>
        </Primitive>

        <!--        &lt;!&ndash; Отображение текущего рейтинга &ndash;&gt;-->
        <!--        <span class="ml-2 text-sm font-medium text-gray-700" v-if="showScore">-->
        <!--            {{ currentRating }} / {{ maxStars }}-->
        <!--        </span>-->
    </div>
</template>

<script setup lang="ts" >
import { Primitive } from 'radix-vue'
import { watch, ref } from 'vue'

const props = defineProps({
    modelValue: {
        validator: (value: number) => value >= 0 && value <= 5,
        type: Number,
        default: 0
    },
    size:{
        default:'width: 16px; height: 16px;',
        type: String
    },
    showScore: {
        type: Boolean,
        default: true
    },
    maxStars: {
        type: Number,
        default: 5
    },

})

// Emit
const emit = defineEmits(['update:modelValue'])

// Реактивные данные
const currentRating = ref(props.modelValue)
const hoveredStar = ref(0)

// Установка рейтинга
const setRating = (rating: number) => {
    if (rating !== currentRating.value) {
        currentRating.value = rating
        emit('update:modelValue', rating)
    }
}

// Наблюдение за изменением props
watch(() => props.modelValue, (newValue) => {
    if (newValue !== currentRating.value) {
        currentRating.value = newValue
    }
})
</script>