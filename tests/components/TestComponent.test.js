import React from 'react'
import { shallow } from 'enzyme'
import TestComponent from '../../src/components/TestComponent'

describe('TestComponent Tests', () => {
  it('contains a div', () => {
    const wrapper = shallow(<TestComponent />)
    expect(wrapper.text()).toEqual('TestComponent')
  })
})
