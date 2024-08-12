import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://meli-game-2.onrender.com/api',
    withCredentials: true
})

export default instance