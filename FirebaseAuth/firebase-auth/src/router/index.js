import Vue from "vue";
import VueRouter from "vue-router";
const firebase = require("firebase/app");

Vue.use(VueRouter);

const routes = [
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/",
    name: "start",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Start.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import(/* webpackChunkName: "about" */ "../views/Add.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import(/* webpackChunkName: "about" */ "../views/Edit.vue"),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.meta.requiresAuth); //boolean
  const user = firebase.auth().currentUser;
  if (protectedRoute && !user) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
