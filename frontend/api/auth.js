import axios from "./axios";

const API = 'http://localhost:3001/api'
export const registerRequest= user => axios.post(`/register`,user) 
export const registerAbogaRequest= abogado => axios.post(`/abogadoregister`,abogado)     
export const loginRequest= user => axios.post(`/login`,user)   
export const loginRequestAbogado= abogado => axios.post(`/abogadologin`,abogado)  

export const verifyTokenRequest = async () => axios.get(`/verify`);

export const getAbogadosData = () => axios.get(`/allabogados`)
 
  