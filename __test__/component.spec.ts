import { enableAutoUnmount, mount } from '@tests/utils/vueTestUtils'
import TemplateComponent from '../src/TemplateComponent.vue'

enableAutoUnmount(afterEach)

describe('TemplateComponent.vue', () => {
    it('should has template-component class', function () {
        //Arrange
        const wrapper = mount(TemplateComponent)
        //Act
        const templateClasses = wrapper.find('.template-component').exists()
    
        //Assert
        expect(templateClasses).toBeTruthy()
      })
})