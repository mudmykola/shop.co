import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import "@/assets/css/style.css";
import { faMagnifyingGlass, faCartShopping, faUser, faArrowRight, faArrowLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faMagnifyingGlass, faCartShopping, faUser, faArrowRight, faArrowLeft, faEnvelope)

const app = createApp(App);
app.use(store);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
