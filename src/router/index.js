import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/components/Login.vue";
import home from "@/components/Home.vue";
import register from "@/components/Register.vue";
import student from "@/components/Student.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  base: "/",
  mode: "history",
  routes: [
    { path: "/", component: home, name: 'home' },
    { path: "/login", component: login, name: 'login' },
    { path: "/register", component: register, name: 'register' },
    { path: "/student/:email", component: student, name: 'student' }
  ]
});

export default router;
