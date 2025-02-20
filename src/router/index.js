import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Information from "../pages/Information.vue";
import ProductList from "../pages/ProductList.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Blog from "../pages/Blog.vue";
import BlogDetail from "../pages/BlogDetail.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/information', component: Information},
    {path: '/products', component: ProductList},
    {path: '/products/:id', component: ProductDetail},
    {path: '/blog', component: Blog},
    {path: '/blog/:id', component: BlogDetail},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router