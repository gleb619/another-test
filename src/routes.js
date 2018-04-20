import HelloPage from './pages/hello.vue';
import HomePage from './pages/home.vue';
import AboutPage from './pages/about.vue';
import FormPage from './pages/form.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';
import TestPage from './pages/test-page.vue';
import MenuPage from './pages/menu.vue';
import ItemDetailsPage from './pages/item-details.vue';
import SearchPage from './pages/search.vue';
import SearchDetailsPage from './pages/search-details.vue';

export default [
  {
    path: '/',
    component: HelloPage,
  },
  {
    path: '/home/',
    component: HomePage,
    alias: '/home'
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/test/',
    component: TestPage,
  },
  {
    path: '/menu/',
    component: MenuPage,
  },
  {
    path: '/item-details/:id',
    component: ItemDetailsPage,
  },
  {
    path: '/search/',
    component: SearchPage,
  },
  {
    path: '/search-details/',
    component: SearchDetailsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
