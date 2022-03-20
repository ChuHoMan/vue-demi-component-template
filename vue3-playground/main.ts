import { createApp } from 'vue'
import App from './App.vue'
import TemplateComponent from '../src/index'

const app = createApp(App)
app.use(TemplateComponent)
app.mount('#app')


