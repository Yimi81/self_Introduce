/*
 * @Descripttion: 
 * @version: 
 * @Author: Yimi81
 * @Date: 2020-11-25 16:50:07
 * @LastEditors: Yimi81
 * @LastEditTime: 2021-01-06 11:49:15
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

//路由懒加载
const Home = () => import("@/pages/home/Home");
const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component:  Home
        }
    ],
    mode: 'history',
})

export default router;