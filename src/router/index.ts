import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "./names";
import HomeView from "@/views/HomeView.vue";
import ListView from "@/views/ListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: ROUTES.HOME,
      component: HomeView,
    },
    {
      path: "/list",
      name: ROUTES.LIST,
      component: ListView,
    },
  ],
});

export default router;
