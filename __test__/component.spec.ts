import { enableAutoUnmount, mount } from '@tests/utils/vueTestUtils';
import { afterEach, describe, expect, it } from 'vitest';
import TemplateComponent from '../src/TemplateComponent.vue';

enableAutoUnmount(afterEach);

describe('templateComponent.vue', () => {
  it('should has template-component class', () => {
    // Arrange
    const wrapper = mount(TemplateComponent);
    // Act
    const templateClasses = wrapper.find('.template-component').exists();

    // Assert
    expect(templateClasses).toBeTruthy();
  });
});
