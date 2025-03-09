import { defineAsyncComponent } from 'vue';

export const links = [
    {
        name:"О компании",
        path:'#'
    },
    {
        name:"Контакты",
        path:'#'
    },
    {
        name:"Вакансии",
        path:'#'
    },
    {
        name:"Статьи",
        path:'#'
    },
    {
        name:"Политика обработки персональных данных",
        path:'#'
    },
]
const InstagramIcon = defineAsyncComponent(() => import('../component/icons/InstagramIcon.vue'));
const TelegramIcon = defineAsyncComponent(() => import('../component/icons/TelegramIcon.vue'));
const FacebookIcon = defineAsyncComponent(() => import('../component/icons/FacebookIcon.vue'));
const XIcon = defineAsyncComponent(() => import('../component/icons/XIcon.vue'));


export const footerIcons = [
    {
        component:InstagramIcon,
        name:'instagram',
    },
    {
        component:TelegramIcon,
        name:'TelegramIcon',
    },
    {
        component:FacebookIcon,
        name:'FacebookIcon',
    },
    {
        component:XIcon,
        name:'XIcon',
    },
]