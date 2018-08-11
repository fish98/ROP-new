import Vue, { AsyncComponent } from 'vue';
import Router, { RouteConfig } from 'vue-router';
// import Home from '@/layouts/index.vue';

Vue.use(Router);

const Layout: AsyncComponent = (): any => import('@/layouts/index.vue')
const Instance: AsyncComponent = (): any => import('@/views/instance.vue')
const Interview: AsyncComponent = (): any => import('@/views/interview.vue')
const Redirect: AsyncComponent = (): any => import('@/views/redirect.vue')

export const constantRoutes: RouteConfig[] = [
    {
        path: '/',
        name: 'index111',
        component: Layout,
    },
    {
        path: '/login_req',
        name: 'redirect',
        component: Redirect,
    },
    {
        path: '/console',
        name: 'console',
        component: Layout,
        children: [
            {
                path: 'instance',
                name: 'instance',
                component: Instance,
            },
            {
                path: 'interview',
                name: 'interview',
                component: Interview,
            },
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
]

const router: Router =  new Router({
    mode: 'history',
    routes: constantRoutes
});

export default router;
