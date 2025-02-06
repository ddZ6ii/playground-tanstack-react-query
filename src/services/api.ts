import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3030",
  validateStatus: (status) => status < 500, // resolve only if the status code is less than 500
})
