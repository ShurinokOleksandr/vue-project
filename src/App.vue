<script setup lang="ts">

import LogoNameIcon from '@/components/icons/LogoNameIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import ClearIcon from '@/components/icons/ClearIcon.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue';
import MenuIcon from '@/components/icons/MenuIcon.vue';
import SaveIcon from '@/components/icons/SaveIcon.vue';
import ShopIcon from '@/components/icons/ShopIcon.vue';
import BoxIcon from '@/components/icons/BoxIcon.vue';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ref } from 'vue';

import './assets/index.css'
const ff = ref(false)
const inputModel = defineModel<string>({ default: ''})
const inputValueModel = ref(inputModel)

function clearInput(){
    inputValueModel.value = ''
}
</script>

<template>
    <header
        class="bg-surface shadow-default-s py-4"
    >
        <section class="container flex gap-10">
            <!--   LOGO   -->
            <div class="flex gap-10">
                <div class="flex items-center gap-[11.41px]">
                    <LogoIcon/>
                    <LogoNameIcon />
                </div>
            </div>
            <!-- MENU WITH SEARCH BAR -->
            <div class="flex gap-4">
                <Button variant="secondary" size="medium" > <MenuIcon :class="[ff ? 'fill-secondary': 'fill-secondaryText' ]"/> Каталог</Button>
                <div class="relative w-[375px]">
                    <Input
                        class="h-10 w-full border-grayscale-light caret-secondary border-[1.5px] bg-surface text-sm text-surfaceText placeholder:text-grayscale-hard focus-visible:border-secondary"
                        :class="[inputValueModel ? 'border-b-[0px] rounded-b-none border-secondary' : '' ]"
                        v-model:modelValue="inputValueModel"
                        placeholder="Найти товар"
                    />
                    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer">
                        <SearchIcon v-if="!inputValueModel"/>
                        <ClearIcon v-if="inputValueModel" @click="clearInput"/>
                    </span>
                    <div
                        class="absolute flex items-center justify-center start-0 end-0"
                        v-if="inputValueModel"
                    >
                        <div
                            class="  w-full h-[150px] overflow-auto rounded-t-none rounded py-2 px-4 border-x-[1.5px] border-b-[1.5px] border-secondary bg-surface text-sm text-surfaceText "
                        >
                            <ul class="flex flex-col gap-2">
                                <li class=" hover:text-s_bold cursor-pointer">product</li>
                                <li class=" hover:text-s_bold cursor-pointer">product</li>
                                <li class=" hover:text-s_bold cursor-pointer">product</li>
                                <li class=" hover:text-s_bold cursor-pointer">product</li>
                                <li class=" hover:text-s_bold cursor-pointer">product</li>
                                <li class=" hover:text-s_bold cursor-pointer">product</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- NAVIGATION WITH PROFILE-->
            <div>
                <nav>
                    <ul class="flex gap-6 justify-center items-center text-xs" >
                        <li >
                            <a class="flex flex-col justify-center items-center" href="#">
                                <span><SaveIcon/></span>
                                <span> Избранное</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex flex-col justify-center items-center" href="#">
                                <span><BoxIcon/></span>
                                <span> Заказы</span>
                            </a>
                        </li>
                        <li>
                            <a class="flex flex-col justify-center items-center" href="#">
                                <span><ShopIcon/></span>
                                <span> Корзина</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Avatar>
                        <AvatarImage src="../public/img.png" alt="avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                </div>
            </div>
        </section>
    </header>
</template>

<style scoped>

</style>
