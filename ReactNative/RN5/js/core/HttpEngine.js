import Axios from 'axios'

export const axios = Axios.create({
  baseURL: "http://www.mocky.io/v2/",
  timeout: 3000,
  // headers: {"key" : "value"}
})

axios.interceptors.response.use(
  (resp) => {
    console.log(`szw axios resp = ${JSON.stringify(resp.data)}`)
    return resp
  },
  (error) => {
    console.log(`szw axios error = ${JSON.stringify(error)}`)
  })



export const doFetch = id => fetch(`http://www.mocky.io/v2/${id}`)

