import Axios from 'axios'

export const axios = Axios.create({
  baseURL: "http://www.mocky.io/v2/",
  timeout: 3000,
  // headers: {"key" : "value"}
})

axios.interceptors.response.use(
  (resp) => {
    console.log(`szw resp = ${JSON.stringify(resp)}`)
    return resp
  },
  (error) => {
    console.log(`szw error = ${JSON.stringify(error)}`)
  })



export const doFetch = id => fetch(`http://www.mocky.io/v2/${id}`)

