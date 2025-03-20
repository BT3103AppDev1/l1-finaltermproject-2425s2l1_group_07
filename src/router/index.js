import { createRouter, createWebHistory } from "vue-router"
import FavouritesPage from "@/views/FavouritesPage.vue"
import ChatsPage from "@/views/ChatsPage.vue"
import ProfilePage from "@/views/ProfilePage.vue"

const routes = [
    {
        path: '/favourites',
        name: 'Favourites',
        component: FavouritesPage
    },
    {
        path: '/chats',
        name: 'Chats',
        component: ChatsPage
    },
    {
        path: '/profile',
        name: 'My Profile',
        component: ProfilePage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router