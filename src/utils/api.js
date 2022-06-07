import axios from 'axios'
import { API_BASE_URL, STORE_TOKEN } from './constants'

export const http = axios.create({
  baseURL: API_BASE_URL,
  Accept: 'application/json',
  'Content-Type': 'application/json',
})

const token = window.localStorage.getItem(STORE_TOKEN)
token &&
  http.interceptors.request.use((config) => {
    config.headers = {
      Authorization: `Bearer ${token}`,
    }

    return config
  })
