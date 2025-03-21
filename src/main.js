import { createApp } from 'vue';
import App from './App.vue';
import router from './index.js'; // Import router

const app = createApp(App);
app.use(router); // Inject router globally
app.mount('#app');
