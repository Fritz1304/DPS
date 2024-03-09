import React, { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest,loginRequest,registerAbogaRequest, loginRequestAbogado,getAbogadosData,verifyTokenRequest } from '../../api/auth';
import { array } from 'zod';
import Cookies from 'js-cookie'
export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors,setErrors] = useState([])
  const [loading,setLoading] = useState(true)
  const [Abogados,setAbogados] = useState([])

  const signup = async (userData) => {
    try {
      const res = await registerRequest(userData);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data)
    }
    };
    const signupAbogado = async (AbogaData) => {
      try {
        const res = await registerAbogaRequest(AbogaData);
        console.log(res.data);
        setUser(res.data);
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        setErrors(error.response.data)
      }
      };

    const signin = async (userData) =>{
      try {
        const res = await loginRequest(userData)
        setUser(res.data);
        setIsAuthenticated(true);
      } catch (error) {
        if(Array.isArray(error.response.data))
       return setErrors(error.response.data)
       setErrors([error.response.data.message])
      }
      
    }
    const signinAbogado = async (AbogaData) =>{
      try {
        const res = await loginRequestAbogado(AbogaData)
        setUser(res.data);
        setIsAuthenticated(true);
      } catch (error) {
        if(Array.isArray(error.response.data))
       return setErrors(error.response.data)
       setErrors([error.response.data.message])
      }
      
    }
    const getAbogados = async () => {
     const res = await getAbogadosData()
     setAbogados(res.data)
     console.log(res)
  
};

useEffect(() => {
  const checkLogin = async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    try {
      const res = await verifyTokenRequest(cookies.token);
      console.log(res);
      if (!res.data) return setIsAuthenticated(false);
      setIsAuthenticated(true);
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setLoading(false);
    }
  };
  checkLogin();
}, []);



    return (
        <AuthContext.Provider
          value={{
            user,
            signup,
            isAuthenticated,
            errors,
            signin,
            signupAbogado,
            signinAbogado,
            getAbogados,
            loading,
            Abogados,
        }}
        >
          {children}
        </AuthContext.Provider>
      );
    
  };

export default AuthContext;
   
