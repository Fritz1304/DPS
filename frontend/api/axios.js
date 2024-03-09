import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dps-sfyn.onrender.com/api',
    withCredentials:true
})

export default instance