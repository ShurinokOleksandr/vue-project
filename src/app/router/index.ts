import { NotFoundPage, CatalogPage, HomePage } from '@/pages';
 import {  createWebHistory, createRouter } from 'vue-router';



const routes = [
    { component: CatalogPage, path: '/catalog',name:'catalog' },
    { component: HomePage, name:'home',path: '/' },
    { path: '/:pathMatch(.*)*', component: NotFoundPage , name:'notfound'}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})