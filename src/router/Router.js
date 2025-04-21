import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import LandingPage from "@/components/LandingPage.vue";
import SignUp from "@/components/Signup.vue";
import UserProfile from "@/components/UserProfile.vue";
import Explore from "@/components/Explore.vue";
import AddListing from "@/components/AddListing.vue";
import FavouritesPage from "@/views/FavouritesPage.vue";
import ChatsPage from "@/components/ChatsPage.vue"; // ✅ uncommented and correct
import migrate from "@/views/migrate.vue"; // ✅ uncommented and correct
import ListingAdded from "@/components/ListingAdded.vue";
import OnboardingPage from "@/views/OnboardingPage.vue";


const routes = [
  { path: "/", component: LandingPage },
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp },
  { path: "/Explore", component: Explore },
  { path: "/add-listing", component: AddListing },
  { path: "/profile", component: UserProfile },
  { path: "/favourites", component: FavouritesPage },
  { path: "/chats", component: ChatsPage },
  { path: '/migrate', component: migrate},
  { path: "/Added", component: ListingAdded},
  { path: "/Onboarding", component: OnboardingPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
