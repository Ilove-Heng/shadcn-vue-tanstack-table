import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/ShadcnExample.vue"),
  },
  {
    path: "/tan",
    alias: "/tanstack",
    name: "tanstack",
    component: () => import("@/views/Tanstack.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
