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

  render() {
    return (
      <form>
        <input placeholder="Image Url:" />
        <input placeholder="Name:" />
        <input placeholder="Description:" />
        <input placeholder="Price:" />
        <button>Add Purchase:</button>
      </form>
    )
  }
}

export default OrdersForm;