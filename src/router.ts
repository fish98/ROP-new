import Vue, { AsyncComponent } from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

const Layout: AsyncComponent = (): any => import ('@/layouts/console/index.vue')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
    },
  ],
});
