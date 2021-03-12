import { createWebHistory, createRouter } from "vue-router";
import Mateo from "./views/Mateo.vue";
import Landing from "./views/Landing.vue";
import Andres from "./views/Andres.vue";

const routes = [
  {
    path: "/",
    component: Landing,
    name: "landind",
  },
  { path: "/mateo", component: Mateo, name: "mateo" },
  { path: "/andres", component: Andres, name: "andres" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
