import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Vue3Marquee from 'vue3-marquee';

// Estilos globais
import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Criação e montagem da aplicação
const app = createApp(App);

app.use(store);
app.use(router);
app.use(Vue3Marquee);

app.mount('#app');