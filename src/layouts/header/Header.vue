<script setup lang="ts">
import {
    ChevronDownIcon,
    LogoNameIcon,
    SearchIcon,
    ClearIcon,
    LogoIcon,
    MenuIcon,
    SaveIcon,
    ShopIcon,
    BoxIcon
} from '@/shared/components/icons';
import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from '@/shared/components/ui/tooltip';
import { AvatarFallback, AvatarImage, Avatar } from '@/shared/components/ui/avatar';
import { Button, Input } from '@/shared/components/ui';
import { useMediaQuery } from '@vueuse/core';
import {  ref } from 'vue';

const ff = ref(false)
const inputModel = defineModel<string>({ default: ''})
const inputValueModel = ref(inputModel)

function clearInput(){
    inputValueModel.value = ''
}

const isMediumScreen = useMediaQuery('(max-width:1208px)')
const isSmallScreen = useMediaQuery('(max-width:768px)')
const isMobileScreen = useMediaQuery('(max-width:470px)')

</script>

<template>
    <header class="relative z-10 bg-surface shadow-default-s py-4">
        <section class="container flex   justify-between lg:gap-10 gap-5">
            <!--   LOGO   -->
            <div class="flex gap-10">
                <div class="flex items-center gap-[11.41px]">
                    <LogoIcon/>
                    <template v-if="!isMediumScreen && !isMobileScreen">
                        <LogoNameIcon />
                    </template>
                </div>
            </div>
            <!-- MENU WITH SEARCH BAR -->
            <div class="flex items-center gap-4">
                <template v-if="!isSmallScreen">
                    <div>
                        <router-link to="/catalog">
                            <Button :size="isMediumScreen ? 'icon' : 'mediumIcon'" variant="secondary" >
                                <MenuIcon :class="[ff ? 'fill-secondary': 'fill-secondaryText' ]"/>
                                {{ isMediumScreen ? '' : "Каталог" }}
                            </Button>
                        </router-link>
                    </div>
                </template>
                <div class="relative z-30 flex items-center lg:w-[375px] md:w-[325px] sm:w-[260px] w-full">
                    <Input
                        class="h-10 w-full border-grayscale-light caret-secondary border-[1.5px] bg-surface text-sm text-surfaceText placeholder:text-grayscale-hard focus-visible:border-secondary"
                        :class="[inputValueModel ? 'border-b-[0px] rounded-b-none border-secondary' : '' ]"
                        v-model:modelValue="inputValueModel"
                        placeholder="Найти товар"
                    />
                    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer">
                        <SearchIcon v-if="!inputValueModel"/>
                        <ClearIcon @click="clearInput" v-else/>
                    </span>
                    <div
                        class="absolute flex items-center justify-center inset-x-0 top-10 start-0 end-0 z-1000"
                        v-if="inputValueModel"
                    >
                        <div
                            class="relative w-full h-[150px] overflow-auto rounded-t-none rounded py-2 px-4 border-x-[1.5px] border-b-[1.5px] border-secondary bg-surface text-sm text-surfaceText z-1000 "
                        >
                            <ul class="relative flex flex-col gap-2 z-1000">
                                <li class=" hover:text-sm_bold cursor-pointer">product</li>
                                <li class=" hover:text-sm_bold cursor-pointer">product</li>
                                <li class=" hover:text-sm_bold cursor-pointer">product</li>
                                <li class=" hover:text-sm_bold cursor-pointer">product</li>
                                <li class=" hover:text-sm_bold cursor-pointer">product</li>
                                <li class=" hover:text-sm_bold cursor-pointer">product</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- NAVIGATION WITH PROFILE-->
            <template v-if="!isSmallScreen">
                <div class="flex items-center">
                    <nav>
                        <ul class="flex lg:gap-6 gap-4   justify-center items-center " >
                            <li >
                                <a class="flex flex-col gap-2 justify-center items-center text-xs" href="#">
                                    <span><SaveIcon/></span>
                                    <span> Избранное</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex flex-col gap-2 justify-center items-center text-xs" href="#">
                                    <span><BoxIcon/></span>
                                    <span> Заказы</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex flex-col gap-2 justify-center items-center text-xs" href="#">
                                    <span><ShopIcon/></span>
                                    <span> Корзина</span>
                                </a>
                            </li>
                            <li>
                                <div class="flex gap-1 items-center">
                                    <div class="flex lg:gap-6 gap-4 items-center">
                                        <Avatar>
                                            <AvatarImage src="/img.png" alt="avatar" />
                                            <AvatarFallback>Avatar</AvatarFallback>
                                        </Avatar>
                                        <template v-if="!isMediumScreen">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger><p class="max-w-20 text-sm truncate">Алеasdasdasdasdксей</p></TooltipTrigger>
                                                    <TooltipContent class="bg-surface" align="center" side="bottom">
                                                        <p class="max-w-50 text-sm ">Алеasdasdasdasdксей</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </template>
                                    </div>
                                    <template v-if="!isMediumScreen">
                                        <Button variant="ghost" size="icon">
                                            <ChevronDownIcon class="rotate-180" />
                                        </Button>
                                    </template>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </template>
        </section>
    </header>


</template>

<style scoped>

</style>