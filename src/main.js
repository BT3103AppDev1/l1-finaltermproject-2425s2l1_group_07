import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Router.js'; // Import router
import './assets/global.css';

const app = createApp(App);
app.use(router); // Inject router globally
app.mount('#app');
