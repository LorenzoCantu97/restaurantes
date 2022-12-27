import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/LogIn.vue';

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;