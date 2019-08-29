import React from 'react';
import { shallow } from 'enzyme';
import OrdersForm from './OrdersForm';

describe('OrdersForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<OrdersForm addOrder={jest.fn()} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update the state when handleChange is callled', () => {
    const mockEvent = {target: {name: 'name', value: 'jeans'}}
    const expected = 'jeans'

    wrapper.instance().handleChange(mockEvent);
    
    expect(wrapper.state('name')).toEqual(expected)
  })

  it('should run handleSubmit when the button is clicked', () => {
    wrapper.instance().handleSubmit = jest.fn();
    const mockEvent = {preventDefault: jest.fn()};

    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled()
  })

});