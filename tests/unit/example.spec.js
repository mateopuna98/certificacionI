import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import home from '/Users/Mariana/Desktop/Vue/primerparcial/src/views/Home.vue'
import ColorBox from '/Users/Mariana/Desktop/Vue/primerparcial/src/components/ColorBox.vue'

describe('Home.vue', () => {

  let wrapper
  let colors = [
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
    let colorBoxes = wrapper.findAll(ColorBox)
    colorBoxes.at(0).trigger('click')
    let cambioColor = true

    for (var i = 0; i < 12; i++) {
      colorBoxes.at(i).trigger('click')
      if(wrapper.vm.color != colors[i]) {cambioColor = false}
    }

    assert.equal(cambioColor, true)
  })

  it('el contador funciona', () => {
    const colorBox = wrapper.find(ColorBox)
    colorBox.trigger('click')
    colorBox.trigger('click')
    assert.equal(wrapper.vm.contador, 2)

  })

  it('el fondo no cambia a ningún color externo, sólo a los que existen', () => {
    var elColorEsta = false
    const colorBox = wrapper.find(ColorBox)
    colorBox.trigger('click')
    elColorEsta = colors.includes(wrapper.vm.color) ? true : false
    assert.equal(elColorEsta, true)
  })
})

