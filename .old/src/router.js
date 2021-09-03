import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('./views/Home.vue');
const Projects = () => import('./views/Projects.vue');

Vue.use(Router);

export const NAMED_ROUTES = {
  HOME: 'home',
  PROJECTS: 'projects'
};

let routes = [
  {
    name: NAMED_ROUTES.HOME,
    path: '/',
    component: Home,
    props: true,
  },
  {
    name: NAMED_ROUTES.PROJECTS,
    path: '/projects',
    component: Projects,
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
