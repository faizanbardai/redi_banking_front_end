import Vue from 'vue';
import VueRouter from 'vue-router';
import RegisterUser from '../views/RegisterUser.vue';
import LoginUser from '../views/LoginUser.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginUser,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterUser,
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // },
];

const router = new VueRouter({
    routes,
});

export default router;
