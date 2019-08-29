import React from 'react';
import './Order.css';

const Order = ({order}) => {
  return (
    <section>
      <img src={order.img} alt={order.name} />
      <h2>{order.name}</h2>
      <p>{order.description}</p>
      <p>${order.price}</p>
      <button>Remove From History</button>
    </section>
  )
}

export default Order;