import Vue, { version} from 'vue'
import App from './App.vue'
import TemplateComponent from '../src/index'


console.warn('Vue version: ', version)
Vue.config.productionTip = false
Vue.use(TemplateComponent)

new Vue({ render: (h) => h(App) }).$mount('#app')


