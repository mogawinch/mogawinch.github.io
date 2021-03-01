import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');

Vue.use(Router);

export const NAMED_ROUTES = {
  HOME: 'home',
};

let routes = [
  {
    name: NAMED_ROUTES.HOME,
    path: '/',
    component: Home,
    props: true,
  },
];

const router = new Router({
  mode: 'history',
  saveScrollPosition: true,
  history: true,
  routes,
});

export default router;
