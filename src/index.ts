import TemplateSFC from './TemplateComponent.vue'
import 'uno.css'

export const TemplateComponent = {
  install(app: any, options?: Record<string, unknown>) {
    console.log(options)
    app.component(TemplateSFC.name, TemplateSFC)
  }
}

