import axios from "axios"

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3333/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
