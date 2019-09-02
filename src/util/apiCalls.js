
export const fetchOrders = () => {
  return fetch('http://localhost:3001/api/v1/purchases')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching orders')
      }
      return response.json()
    })
    .catch(error => {
      throw Error(error.message)
    })
}

export const postOrder = (newOrder) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch('http://localhost:3001/api/v1/purchases', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Error posting orders')
      }
      return response.json()
    })
    .catch(error => {
      throw Error(error.message)
    })
}

export const deleteOrder = (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`http://localhost:3001/api/v1/purchases/${id}`, options)
    .then(() => fetch('http://localhost:3001/api/v1/purchases'))
    .then(response => {
      if(!response.ok) {
        throw Error('Error deleting orders')
      }
      return response.json()
    })
    .catch(error => {
      throw Error(error.message)
    })
}