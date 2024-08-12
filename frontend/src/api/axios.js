import axios from 'axios'

const instance = axios.create({
    baseURL: 'meli-game-hj4gshkaj-juanmateobuccolinigmailcoms-projects.vercel.app/api',
    withCredentials: true
})

export default instance