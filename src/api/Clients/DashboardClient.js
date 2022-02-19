import { ApiClient } from '../Middleware/apiClient'
let client = new ApiClient("https://jsonplaceholder.typicode.com/")

export default {
  getUserData(data) {
    return client.get('users', data)
  },
}