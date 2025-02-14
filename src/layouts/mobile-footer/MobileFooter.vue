<script setup lang="ts">

import { TooltipProvider, TooltipContent, TooltipTrigger, Tooltip } from '@/shared/components/ui/tooltip';
import { MenuIcon, SaveIcon, ShopIcon, BoxIcon, Button } from '@/shared/components';
import { AvatarFallback, AvatarImage, Avatar } from '@/shared/components/ui/avatar';
import { useMediaQuery } from '@vueuse/core';
const isSmallScreen = useMediaQuery('(max-width:768px)')
const isMediumScreen = useMediaQuery('(max-width:1208px)')

</script>

<template>
    <template v-if="isSmallScreen">
        <div class="sticky inset-x-0 bottom-0 bg-surface shadow-default-s">
            <nav class="flex justify-between items-center px-4 py-2">
                <Button variant="ghost" size="icon" >
                    <span class="inline-flex flex-col gap-2 justify-center items-center">
                        <MenuIcon />
                        <p class="text-xs_mob">Каталок</p>
                    </span>
                </Button>
                <ul class="flex   gap-9 justify-between items-center " >
                    <li >
                        <a class="flex flex-col gap-1 justify-center items-center text-xs_mob" href="#">
                            <span><SaveIcon/></span>
                            <span> Избранное</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-col gap-1 justify-center items-center text-xs_mob" href="#">
                            <span><BoxIcon/></span>
                            <span> Заказы</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex flex-col gap-1 justify-center items-center text-xs_mob" href="#">
                            <span><ShopIcon/></span>
                            <span> Корзина</span>
                        </a>
                    </li>
                </ul>
                <div class="flex gap-1 items-center">
                    <div class="flex lg:gap-6 gap-4 items-center">
                        <Avatar>
                            <AvatarImage src="img.png" alt="avatar" />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                        <template v-if="!isMediumScreen">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><p class="max-w-20 text-s truncate">Алеasdasdasdasdксей</p></TooltipTrigger>
                                    <TooltipContent class="bg-surface" align="center" side="bottom">
                                        <p class="max-w-50 text-s ">Алеasdasdasdasdксей</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </template>
                    </div>
                </div>
            </nav>
        </div>
    </template>

</template>

<style scoped>

</style>