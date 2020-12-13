import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../services/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [nome,setNome] = useState()
  const [val, setVal]=useState()

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  function myChangeHandler(e) {
    setVal(e.target.name)
    let nam = e.target.name;
    let val = e.target.value;
    //setState({ [nam]: val }); 
    }

  async function handleLogin(e) {
      const dados = {
        "email" : "astrogildo@gmail.com",//e.target.email.value,
        "password" : "123456"//e.target.password.value
    }
    console.log(e)
    console.log("555555555555555555555555555555555555555")
    const { data: { token } } = await api.post('/signin',dados)
        .then(response => console.log(response))
        .catch((err) => console.log(err));

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/users');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout,myChangeHandler };
}