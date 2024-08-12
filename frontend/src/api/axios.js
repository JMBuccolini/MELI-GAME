import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5050/api',
    withCredentials: true
})

export default instance