import { createApp } from 'vue';
import { TemplateComponent } from '../src/index';
import App from './App.vue';

const app = createApp(App);
app.use(TemplateComponent);
app.mount('#app');
