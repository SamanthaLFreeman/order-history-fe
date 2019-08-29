import React, { Component } from 'react';
import './App.css';
import OrdersContainer from '../OrdersContainer/OrdersContainer';
import OrdersForm from '../OrdersForm/OrdersForm';
import { fetchOrders } from '../apiCalls/apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    // fetchOrders()
    fetch('http://localhost:3001/api/v1/purchases')
      .then(response => response.json())
      .then(data => this.setState({orders: data}))
      .catch(error => console.log(error))
  }

  addOrder = (newOrder) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/api/v1/purchases', options)
      .then(response => response.json())
      .then(() => this.setState({ orders: [...this.state.orders, newOrder] }))
      .catch(error => console.log(error));
  }

  removeOrder = (id) => {
    const filteredOrders = this.state.orders.filter(order => {
      return order.id !== id
    })
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`http://localhost:3001/api/v1/purchases/${id}`, options)
      .then(() => fetch('http://localhost:3001/api/v1/purchases'))
      .then(response => response.json())
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
