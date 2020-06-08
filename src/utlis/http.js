import Axios from 'axios'
Axios.defaults.baseURL = '/api'
Axios.defaults.setTimeout = 8000
Axios.interceptors.response.use((res) => {
  return res.data
})
