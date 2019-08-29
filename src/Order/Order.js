import React from 'react';
import './Order.css';

const Order = ({order, removeOrder}) => {
  return (
    <section className='order'>
      <img src={order.img} alt={order.name} />
      <div className="order-center">
      <h2>{order.name}</h2>
      <p>{order.description}</p>
      </div>
      <div className="order-right">
      <p className="price">${order.price}</p>
      <button className="remove-btn" onClick={() => removeOrder(order.id)}>Remove From History</button>
      </div>
    </section>
  )
}

export default Order;