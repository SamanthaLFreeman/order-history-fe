import React, { Component } from 'react';
import './OrdersForm.css';

class OrdersForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      img: '',
      description: '',
      price: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      ...this.state
    }
    this.props.addOrder(newOrder);
    this.setState({
      name: '',
      img: '',
      description: '',
      price: ''
    })
  }

  render() {
    return (
      <form>
        <input
        type="text"
        placeholder="Image Url:" 
        name="img" 
        value={this.state.img} 
        onChange={this.handleChange} />
        <input 
        type="text"
        placeholder="Name:" 
        name="name" 
        value={this.state.name} 
        onChange={this.handleChange} />
        <input 
        type="text"
        placeholder="Description:" 
        name="description" 
        value={this.state.description}
        onChange={this.handleChange} />
        <input
        type="number"
        placeholder="Price:" 
        name="price" 
        value={this.state.price} 
        onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add Purchase:</button>
      </form>
    )
  }
}

export default OrdersForm;