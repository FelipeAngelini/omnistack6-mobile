import axios from 'axios'

const api = axios.create({
  baseURL: 'https://omnistack-backend-angelini.herokuapp.com'
})

export default api
