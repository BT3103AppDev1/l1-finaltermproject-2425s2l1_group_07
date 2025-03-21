import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";  
import LandingPage from "@/components/LandingPage.vue"; 
import SignUp from "@/components/Signup.vue";
import Explore from "@/components/Explore.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp },
  { path: "/explore", component: Explore }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
