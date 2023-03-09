import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";
import Tag from "../views/Tag.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/blogs/details/:id",
      name: "Details",
      component: Details,
    },
    {
      path: "/blogs/create",
      name: "Create",
      component: Create,
    },
    {
      path: "/blogs/:tag",
      name: "Tag",
      component: Tag,
      // props: true,
    },
  ],
});

export default router;
