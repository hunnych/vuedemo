import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/contactus",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/contactusdata",
    name: "ContactUsData",
    component: () => import("../views/ContactUsData.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
