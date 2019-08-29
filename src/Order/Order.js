import React from 'react';
import './Order.css';

const Order = ({order}) => {
  return (
    <h2>{order.name}</h2>
  )
}

export default Order;