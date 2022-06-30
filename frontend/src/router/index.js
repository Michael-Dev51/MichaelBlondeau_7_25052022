import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../components/Signup.vue"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/allPost",
    name: "AllPost",
    component: () => import("../views/AllPost.vue"),
  },
  {
    path: "/userprofil",
    name: "UserProfil",
    component: () => import("../components/UserProfil.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = window.localStorage.getItem("connected");

  if ((to.name !== "Login" || to.name !== "Signup") && !isAuthenticated)
    next({ name: "Login" });
  else next();
});
/*router.beforeEach((to, from, next) => {
  //const isAuthenticated = window.localStorage.getItem("connected");

  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
});
*/

export default router;
