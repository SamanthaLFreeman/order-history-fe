import React from 'react';
import './OrdersContainer.css';
import Order from '../Order/Order'

const OrdersContainer = ({ orders, removeOrder }) => {
  const allOrders = orders.map(order => {
    return <Order order={order} key={order.id} removeOrder={removeOrder}/>
  })

  return (
    <section className="orders-container">
      {allOrders}
    </section>
  )
}

export default OrdersContainer;