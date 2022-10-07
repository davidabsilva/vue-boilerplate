import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/router",
    name: "Router",
    component: () =>
      import(/* webpackChunkName: "Router" */ "../views/Router.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
