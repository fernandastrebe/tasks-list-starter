import { mount } from '@vue/test-utils'
import InputTasks from '../../src/components/InputTasks.vue'

describe('InputTasks test', () => {
    it('Should be a vue component', () => {
        const wrapper = mount(InputTasks)

        expect(wrapper.vm).toBeDefined()
        expect(wrapper.isVisible()).toBe(true)
        
    }),
    
    describe('Input test', () => {
        it('Should be a input', async () => {
            const wrapper = mount(InputTasks, {
                propsData: {
                    title: ''
                }
            })

            await wrapper.setData({ title: 'test'})
            await wrapper.vm.$nextTick()

            expect(wrapper.vm.title).toEqual('test')
        })
    }),

    describe('Button test', () => {
        it('Should be a button', () => {
            const wrapper = mount(InputTasks)

            expect(wrapper.find('.buttonReturnArea').isVisible()).toBe(true)
            expect(wrapper.find('.buttonList').isVisible()).toBe(true)
        })
    })
})