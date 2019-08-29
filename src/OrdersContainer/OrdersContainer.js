import React from 'react';
import './OrdersContainer.css';
import Order from '../Order/Order'

const OrdersContainer = ({orders}) => {
  const allOrders = orders.map(order => {
    return <Order order={order} key={order.id}/>
  })

  return (
    <section>
      {allOrders}
    </section>
  )
}

export default OrdersContainer;