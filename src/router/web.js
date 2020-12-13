import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home';
import SimonGame from '../views/SimonGame';
import Store from '../views/Store';

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/simongame',
        component:SimonGame
    },
    {
        path:'/store',
        component:Store
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
