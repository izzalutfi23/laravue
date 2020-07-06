require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import IndexComponent from './components/posts/Index.vue';
import CreateComponent from './components/posts/Create.vue';
import EditComponent from './components/posts/Edit.vue';
import Profil from './components/Profil.vue';

const routes = [{
        name: 'posts',
        path: '/',
        component: IndexComponent
    },
    {
        name: 'create',
        path: '/create',
        component: CreateComponent
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditComponent
    },
    {
        name: 'profil',
        path: '/profil',
        component: Profil
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

export default {};
