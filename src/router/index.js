import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/Users/LoginView.vue";
import SignUpView from "@/views/Users/SignUpView.vue";
import UserProfileView from "@/views/Users/UserProfileView.vue";
// import AboutView from "@/views/landing/AboutView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "user-login",
      component: LoginView,
    },
    {
      path: "/sign-up",
      name: "user-sign-up",
      component: SignUpView,
    },
    {
      path: "/user-profile",
      name: "user-profile",
      component: UserProfileView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: AboutView,
    // },

    // Catch-all 404
    {
      path: "/:catchAll(.*)",
      // The above is, apparently, a regex pattern
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
