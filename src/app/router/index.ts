// import { NotFoundPage, CatalogPage, HomePage } from '@/pages';
import { createWebHistory, createRouter } from 'vue-router';

const CatalogPage = ()  => import('../../pages/catalog-page/CatalogPage.vue')
const HomePage  = () => import('../../pages/home-page/HomePage.vue')
const NotFoundPage  = () => import('../../pages/not-found-page/NotFoundPage.vue')
const CategoryPage  = () => import('@/pages/category-page/CategoryPage.vue')

const routes = [
    { component: CatalogPage, path: '/catalog',name:'catalog' },
    { component: HomePage, name:'home',path: '/' },
    { path: '/:pathMatch(.*)*', component: NotFoundPage , name:'notfound'},
    { path: '/catalog/:pathMatch(.*)*', component: CategoryPage, name:'category' },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})