import { createRouter, createWebHistory } from "vue-router";

function documentPath(pages) {
  return import(`./pages/${pages}.vue`);
}

const routes = [
  {
    path: "/",
    name: 'HomePage',
    component: documentPath("Home"),
  },
  {
    path: "/filme/:id",
    name: 'CatalogoFilmes',
    component: documentPath("Filme"),
    props: true,
  },
  {
    path: "/salvos",
    name: 'MeusFilmes',
    component: documentPath("MeusFilmes"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: 'PageErro',
    component: documentPath("Erro"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
