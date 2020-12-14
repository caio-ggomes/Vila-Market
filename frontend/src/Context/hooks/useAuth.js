import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../main/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucess, setSucess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
 
  
  async function handleLogin() {
    var userData
    const data = {
      "email":email,
      "password": password
    }
    console.log("777777777777777777777777777777")
    console.log(data)
    api.post('\signin',data)
    .then( response=>{
        userData = response.data
        localStorage.setItem('token', JSON.stringify(userData.token));
        api.defaults.headers.Authorization = `Bearer ${userData.token}`;

    } )
    setSucess(true);
    
    
    setAuthenticated(true);
  

  }


  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
    setSucess(false)
  }
  
  return { authenticated, loading, sucess, handleLogin, handleLogout, setEmail, setPassword, };



}