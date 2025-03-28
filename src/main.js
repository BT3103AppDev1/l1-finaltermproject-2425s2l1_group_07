import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Router.js'
import "./assets/global.css"

createApp(App).use(router).mount('#app')
