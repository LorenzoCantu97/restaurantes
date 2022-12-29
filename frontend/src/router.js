import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/LogIn.vue';
import AddPage from './components/AddPage.vue';
import UpdatedPage from './components/UpdatePage.vue';

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
    },
    {
        name: 'AddPage',
        component: AddPage,
        path: '/add'
    },
    {
        name: 'UpdatePage',
        component: UpdatedPage,
        path: '/update'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;