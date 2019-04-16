import Vue from 'vue';
import Router from 'vue-router';
import Invoice from './views/Invoice.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'new-invoice',
      component: Invoice,
    },
  ],
});
