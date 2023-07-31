import { mount } from '@vue/test-utils'
import ListBody from '../../src/components/ListsBody.vue'

describe('ListBody test', () => {
    it('Should be a vue component', () => {
        const wrapper = mount(ListBody)

        expect(wrapper.vm).toBeDefined()
        expect(wrapper.isVisible()).toBe(true)
        
    })
})