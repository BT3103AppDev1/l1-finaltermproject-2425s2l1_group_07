import { createRouter, createWebHistory } from 'vue-router';
import Explore from '@/components/Explore.vue'; // Adjust path based on your structure
import AddListing from '@/components/AddListing.vue'; // Adjust path based on location

const routes = [
  { path: '/', component: Explore },
  { path: '/add-listing', component: AddListing }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
