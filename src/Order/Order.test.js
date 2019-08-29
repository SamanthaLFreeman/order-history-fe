import React from 'react';
import { shallow } from 'enzyme';
import Order from './Order';

describe('Order', () => {
  let wrapper;
  let removeMock;
  
  beforeEach(() => {
    const mockOrder = {
      name: 'Jeans',
      img: 'fancy looking jeans',
      description: 'Obviously pants...',
      price: '10000000'
    }
    removeMock = jest.fn()
    wrapper = shallow(<Order order={mockOrder} removeOrder={removeMock}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call the removeOrder method on click of button', () => {
    wrapper.find('button').simulate('click');
    expect(removeMock).toHaveBeenCalled();
  })
})