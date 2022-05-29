import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegisterUser from '../views/RegisterUser.vue';
import LoginUser from '../views/LoginUser.vue';
import UserDashboard from '../views/UserDashboard.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
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
    {
        path: '/dashboard',
        name: 'dashboard',
        component: UserDashboard,
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
