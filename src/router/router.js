import Vue from "vue";
import Router from "vue-router";

import osCatalog from '../components/os-catalog.vue'
import osCart from '../components/os-cart.vue'

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: osCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: osCart,
            props: true
        }
    ]
})

export default router