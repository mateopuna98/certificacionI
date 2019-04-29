import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import home from '/Users/Mariana/Desktop/Vue/primerparcial/src/views/Home.vue'
import ColorBox from '/Users/Mariana/Desktop/Vue/primerparcial/src/components/ColorBox.vue'

describe('Home.vue', () => {

  let wrapper


  beforeEach(function () {
    wrapper = shallowMount(home, {
      propsData: { }
    })
  })

  it('Existe el objeto colorBox', () => {
    assert.equal((wrapper.find(ColorBox).exists()), true)
  })

  it('Tiene 12 elementos', () => {
    assert.lengthOf(wrapper.vm.swatches, 12)
  })

  it('El fondo cambió al color del elemento clickeado', () => {
    const colorBox = wrapper.find(ColorBox)
    colorBox.trigger('click')
    assert.equal(wrapper.vm.color, "#ff691f")
  })

  it('el contador funciona', () => {
    const colorBox = wrapper.find(ColorBox)
    colorBox.trigger('click')
    colorBox.trigger('click')
    assert.equal(wrapper.vm.contador, 2)

  })

  it('el fondo no cambia a ningún color externo, sólo a los que existen', () => {
    var elColorEsta = false
    var colors = [
      "#ff691f" ,
      "#fab81e" ,
      "#7fdbb6" ,
      "#19cf86" ,
      "#91d2fa" ,
      "#1b95e0" ,
      "#abb8c2" ,
      "#e81c4f" ,
      "#f58ea8" ,
      "#981ceb" ,
      "#ffffff" ,
      "#000000" 
    ]
    const colorBox = wrapper.find(ColorBox)
    colorBox.trigger('click')
    elColorEsta = colors.includes(wrapper.vm.color) ? true : false
    assert.equal(elColorEsta, true)
  })
})

