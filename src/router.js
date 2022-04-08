import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/Home";
import CatalogoFilmes from "./pages/Filme";
import MeusFilmes from "./pages/MeusFilmes";
import PageErro from "./pages/Erro";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/filme/:id",
    component: CatalogoFilmes,
    props: true,
  },
  {
    path: "/salvos",
    component: MeusFilmes,
  },
  {
    path: "*",
    component: PageErro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
