// Used for setting up a type of connector to communicate with the backend

import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
