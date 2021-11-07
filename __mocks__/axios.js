const axios = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  create: () => axios,
  defaults: {
    adapter: {},
    headers: {},
  },
}

export default axios
