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
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <form>
        <input 
        placeholder="Image Url:" 
        name="img" 
        value={this.state.img} 
        onChange={this.handleChange} />
        <input 
        placeholder="Name:" 
        name="name" 
        value={this.state.name} 
        onChange={this.handleChange} />
        <input 
        placeholder="Description:" 
        name="description" 
        value={this.state.description}
        onChange={this.handleChange} />
        <input 
        placeholder="Price:" 
        name="price" 
        value={this.state.price} 
        onChange={this.handleChange} />
        <button>Add Purchase:</button>
      </form>
    )
  }
}

export default OrdersForm;