import React, { createContext, useState, useEffect } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, sucess, handleLogin, handleLogout,  setEmail, setPassword, 
  } = useAuth();

  return (
    <Context.Provider value={{  authenticated, loading, sucess, handleLogin, handleLogout, setEmail, setPassword }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
