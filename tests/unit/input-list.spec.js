import { mount } from '@vue/test-utils'
import InputList from '../../src/components/InputList.vue'

describe('InputList test', () => {
    it('Should be a vue component', () => {
        const wrapper = mount(InputList, {
            propsData: {
                title: ''
            }
        })

        expect(wrapper.vm).toBeDefined()
        expect(wrapper.isVisible()).toBe(true)
        
    }),
    
    describe('Input test', () => {
        it('Should be a input', async () => {
            const wrapper = mount(InputList, {
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
            const wrapper = mount(InputList)

            expect(wrapper.find('.button').isVisible()).toBe(true)
        })
    })
})