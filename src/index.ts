import TemplateSFC from './TemplateComponent.vue'
import 'uno.css'

const TemplateComponent = {
  install(app: any, options: any) {
    console.log(options)
    app.component(TemplateSFC.name, TemplateSFC)
  }
}

export default TemplateComponent
