import React, { createContext, useState, useEffect } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, sucess, sucessCad, google,
    handleLogin,  handleLogout,  setEmail,  setPassword, setUserName,setConfirmPassword,
    setSucessCad, handleCadastro, handleLoginGoogle  
  } = useAuth();

  return (
    <Context.Provider value={{  authenticated, loading, sucess, sucessCad, google,
                                handleLogin,  handleLogout,  setEmail,  setPassword, setUserName,setConfirmPassword,
                                setSucessCad, handleCadastro, handleLoginGoogle}}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
