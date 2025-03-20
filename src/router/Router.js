import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";  
import LandingPage from "@/components/LandingPage.vue"; 
import SignUp from "@/components/Signup.vue"

const routes = [
  { path: "/", component: LandingPage },
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
