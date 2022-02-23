import { ApiClient } from '../Middleware/apiClient'
let client = new ApiClient(process.env.REACT_APP_API_BASE_URL)

export default {
  getUserData(data) {
    return client.get('users', data)
  },
  validateUser(data){
    return client.get('users/'+data)
  },
  getLoanCount(data)
  {
    return client.get('loantotal',data)
  }
}