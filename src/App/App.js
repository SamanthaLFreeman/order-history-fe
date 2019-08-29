import React, { Component } from 'react';
import './App.css';
import OrdersContainer from '../OrdersContainer/OrdersContainer';
import OrdersForm from '../OrdersForm/OrdersForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/purchases	')
      .then(response => response.json())
      .then(data => this.setState({orders: data}))
      .catch(error => console.log(error))
  }

  addOrder = (newOrder) => {
    // this.setState({orders: ...this.state.orders, newOrder})
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
          <OrdersContainer orders={this.state.orders} />
        </div>
      </div>
    );
  }
}

export default App;
