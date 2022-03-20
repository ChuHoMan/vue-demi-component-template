import Vue from 'vue'
import App from './App.vue'
import TemplateComponent from '../src/index'

Vue.config.productionTip = false
Vue.use(TemplateComponent)

new Vue({ render: (h) => h(App) }).$mount('#app')


