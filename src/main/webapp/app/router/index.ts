import Vue from 'vue';
import Component from 'vue-class-component';
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate', // for vue-router 2.2+
]);
import Router from 'vue-router';

const Home = () => import('@/core/home/home.vue');
const Error = () => import('@/core/error/error.vue');
const PickATourPage = () => import('@/core/pick-a-tour-page/pick-a-tour-page.vue');
const OrderTour = () => import('@/core/order-tour-page/order-tour-page.vue');
const ToursPage = () => import('@/core/tours-page/tours-page.vue');
import account from '@/router/account.ts';
import admin from '@/router/admin.ts';
import entities from '@/router/entities.ts';
import pages from '@/router/pages.ts';

Vue.use(Router);

// prettier-ignore
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/order-tour',
      name: 'Order Tour',
      component:OrderTour,
      meta: { error404: true }
    },
    {
      path: '/pick-tour',
      name: 'Pick Tour',
      component:PickATourPage,
      meta: { error404: true }
    },
    {
      path: '/tour-page',
      name: 'Tour Page',
      component:ToursPage,
      meta: { error404: true }
    },
    {
      path: '/forbidden',
      name: 'Forbidden',
      component: Error,
      meta: { error403: true }
    },
    {
      path: '/not-found',
      name: 'NotFound',
      component: Error,
      meta: { error404: true }
    },
    ...account,
    ...admin,
    ...entities,
    ...pages
  ]
});
