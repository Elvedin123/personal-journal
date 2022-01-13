import axios from "axios"
const BASE = "appL1Xp82EmM19bEX"
const KEY = "keyjXbnZKpj2SxHAu"
const baseURL = `https://api.airtable.com/v0/${BASE}/Entries/`

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${KEY}`
  }
})
export default api