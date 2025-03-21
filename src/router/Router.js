import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";  
import LandingPage from "@/components/LandingPage.vue"; 
import SignUp from "@/components/Signup.vue";
import UserProfile from "@/components/UserProfile.vue";

import Explore from "@/components/Explore.vue";
import AddListing from "@/components/AddListing.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp },
  { path: "/Explore", component: Explore },
  { path: '/add-listing', component: AddListing },
  { path: "/profile", component: UserProfile }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;