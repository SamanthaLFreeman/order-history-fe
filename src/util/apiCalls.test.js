import { fetchOrders, postOrder, deleteOrder } from '../util/apiCalls';

describe('fetchOrders', () => {
  let mockResponse

  beforeEach(() => {
    mockResponse = [ 
      {
        id: 42,
        name: "Blah",
        img: "Blah img",
        description: "Blah blah blah",
        price: "1000000"
      }
    ] 
  })

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })
  })

  it('should call fetch with the correct url', () => {
    fetchOrders();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/purchases')
  });

  it('should return an array of orders (HAPPY)', () => {
    expect(fetchOrders()).resolves.toEqual(mockResponse)
  }); 

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(fetchOrders()).rejects.toEqual(Error('Error fetching orders'))
  });

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'ERROR'
      })
    })

    expect(fetchOrders()).rejects.toEqual(Error('ERROR'))
  });
});

describe('postOrder', () => {
  let mockResponse

  beforeEach(() => {
    mockResponse = [
      { 
        id: 42,
        name: "Blah",
        img: "Blah img",
        description: "Blah blah blah",
        price: "1000000"
      }
    ]
  })

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })
  })

  it('should call fetch with the correct url', () => {
    postOrder();

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/purchases')
  });

  it('should return an array of orders (HAPPY)', () => {
    expect(postOrder()).resolves.toEqual(mockResponse)
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(postOrder()).rejects.toEqual(Error('Error posting orders'));
  });

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'ERROR'
      })
    })

    expect(postOrder()).rejects.toEqual(Error('ERROR'));
  })
});

describe('deleteOrder', () => {
  let mockResponse

  beforeEach(() => {
    mockResponse = [
      {
        id: 42,
        name: "Blah",
        img: "Blah img",
        description: "Blah blah blah",
        price: "1000000"
      }
    ]
  })

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse)
    })
  })

  it('should return an array of orders (HAPPY)', () => {
    expect(deleteOrder()).resolves.toEqual(mockResponse)
  });

  it('should return an error (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(deleteOrder()).rejects.toEqual(Error('Error deleting orders'))
  });

  it('should return an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'ERROR'
      })
    })

    expect(deleteOrder()).rejects.toEqual(Error('ERROR'))
  });
});