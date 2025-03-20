<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/Router.js"; 
import "./assets/global.css"; 

const app = createApp(App);

app.use(router); 
app.mount("#app");
=======
import { createApp } from 'vue';
import App from './App.vue';
import router from './index.js'; // Import router

const app = createApp(App);
app.use(router); // Inject router globally
app.mount('#app');
>>>>>>> e88bc9b (Created button to link add listing to explore page)
