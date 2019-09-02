import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { fetchOrders, postOrder, deleteOrder } from '../util/apiCalls'

jest.mock('../util/apiCalls.js');


describe('App', () => {

  beforeEach(() => {

    fetchOrders.mockImplementation(() => {
      return Promise.resolve([{
        id: 42,
        name: "Blah",
        img: "Blah img",
        description: "Blah blah blah",
        price: "1000000"
      }])
    })

    postOrder.mockImplementation(() => {
      return Promise.resolve([{
        id: 43,
        name: "Blah",
        img: "Blah img",
        description: "Blah blah blah",
        price: "1000000"
      }] )
    })

    deleteOrder.mockImplementation(() => {
      return Promise.resolve([])
    })
  })

  it('should match the snapshot', async () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetchOrders after mounting', () => {
    shallow(<App />);
    expect(fetchOrders).toHaveBeenCalled();
  })

  it('should update state with an order when addOrder is called', async () => {
    // Setup
    const wrapper = await shallow(<App />);
    const mockOrder = {
      id: 43,
      name: "Blah",
      img: "Blah img",
      description: "Blah blah blah",
      price: "1000000"
    };
    const expected = [{
      id: 42,
      name: "Blah",
      img: "Blah img",
      description: "Blah blah blah",
      price: "1000000"
    }, mockOrder];

    // Execution
    await wrapper.instance().addOrder(mockOrder);

    // Expectation
    expect(wrapper.state('orders')).toEqual(expected);
  });

  it('should update state with the order removed when removeOrder is called', async () => {
    // Setup
    const wrapper = await shallow(<App />);
    const mockOrder = [{
      id: 42,
      name: "Blah",
      img: "Blah img",
      description: "Blah blah blah",
      price: "1000000"
    }];
    const expected = [];

    expect(wrapper.state('orders')).toEqual(mockOrder)
    // Execution
    await wrapper.instance().removeOrder(42);

    // Expectation
    expect(wrapper.state('orders')).toEqual(expected);
  })
})
