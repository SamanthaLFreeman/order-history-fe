import React from 'react';
import { shallow } from 'enzyme';
import OrdersContainer from './OrdersContainer';

describe('OrdersContainer', () => {
  let wrapper;

  beforeEach(() => {
    const mockOrders = [
      {
        name: 'Jeans',
        img: 'fancy looking jeans',
        description: 'Obviously pants...',
        price: '10000000',
        id: 42
    }
  ]
    wrapper = shallow(<OrdersContainer orders={mockOrders} removeOrder={jest.fn()}/>)
  })

  it('should match the snapshot with data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot with no data passed through', () => {
    const mockOrders = [
      {
        name: '',
        img: '',
        description: '',
        price: '',
        id: ''
      }
    ]
    const wrapper = shallow(<OrdersContainer orders={mockOrders} removeOrder={jest.fn()} />)
    expect(wrapper).toMatchSnapshot();
  })
})