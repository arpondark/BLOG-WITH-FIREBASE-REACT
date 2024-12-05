import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({children}) => {
    let isAuth = JSON.parse(localStorage.getItem("isAuth") || false);
  return isAuth ? children :<Navigate to="/" />
    
}

export default Protected
