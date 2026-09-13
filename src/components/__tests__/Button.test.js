import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '../Button.vue'

describe('Button', () => {
    it('muestra el texto del slot', () => {
        const wrapper = mount(Button, {
            slots: { default: 'Guardar' }
        })
        expect(wrapper.text()).toBe('Guardar')
    })

    it('aplica la clase de variante correcta', () => {
        const wrapper = mount(Button, {
            props: { variant: 'danger' },
            slots: { default: 'Eliminar' }
        })
        expect(wrapper.classes()).toContain('ts-btn--danger')
    })

    it('está deshabilitado cuando disabled es true', () => {
        const wrapper = mount(Button, {
            props: { disabled: true },
            slots: { default: 'Botón' }
        })
        expect(wrapper.attributes('disabled')).toBeDefined()
    })
})