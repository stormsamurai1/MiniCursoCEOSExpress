import axios from 'axios'

//Cria o "tunel de conexão entre seu frontend e seu backend"
const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api