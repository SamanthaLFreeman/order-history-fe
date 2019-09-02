import React, { Component } from 'react';
import './App.css';
import OrdersContainer from '../OrdersContainer/OrdersContainer';
import OrdersForm from '../OrdersForm/OrdersForm';
import { fetchOrders, postOrder, deleteOrder } from '../util/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    fetchOrders()
      .then(data => this.setState({orders: data}))
      .catch(error => console.log(error))
  }

  addOrder = (newOrder) => {
    postOrder(newOrder)
      .then(() => this.setState({ orders: [...this.state.orders, newOrder] }))
      .catch(error => console.log(error));
  }

  removeOrder = (id) => {
    const filteredOrders = this.state.orders.filter(order => {
      return order.id !== id
    })  

    deleteOrder(id)
      .then(() => this.setState({orders: filteredOrders}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <OrdersForm addOrder={this.addOrder}/>
          </div>
        </header>
        <div className='purchase-container'>
          <OrdersContainer orders={this.state.orders} removeOrder={this.removeOrder}/>
        </div>
      </div>
    );
  }
}

export default App;
