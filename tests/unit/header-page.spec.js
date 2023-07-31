import { mount } from '@vue/test-utils'
import HeaderPage from '../../src/components/HeaderPage.vue'

describe('HeaderPage test', () => {
    it('Should be a vue component', () => {
        const wrapper = mount(HeaderPage)

        expect(wrapper.vm).toBeDefined()
        expect(wrapper.isVisible()).toBe(true)
        
        expect(wrapper.find('.to').text()).toEqual('to')
        expect(wrapper.find('.do').text()).toEqual('do')
        
    })
})