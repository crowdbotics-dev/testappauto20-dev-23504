import axios from "axios"
import { FB_CONNECTOR_TOKEN } from "react-native-dotenv"
const fBconnector = axios.create({
  baseURL: "https://fb.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${FB_CONNECTOR_TOKEN}`
  }
})
export const apiService = {}
