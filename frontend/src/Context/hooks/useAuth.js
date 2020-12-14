import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../main/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sucess, setSucess] = useState(false);
  const [userName, setUserName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sucessCad, setSucessCad] = useState(false);
  const [google, setGoogle] = useState(false);

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
    api.post('\signin',data)
    .then( response=>{
        userData = response.data
        localStorage.setItem('token', JSON.stringify(userData.token));
        api.defaults.headers.Authorization = `Bearer ${userData.token}`;

    } )
    setSucess(true);
    setAuthenticated(true);
  }

  function handleCadastro(){
    const data = {
      "email":email,
      "password": password,
      "name": userName,
      "confirmPassword": confirmPassword
    }

    api.post('/signup', data)
    .then( response=>{
        console.log(response)
        
        setSucessCad(true)
    } )
  
  
  }
  function handleLoginGoogle(){
   
    const token = password;

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setSucess(true);
    setAuthenticated(true);
    setGoogle(true);

  }




  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
    setSucess(false)
  }
  
  return { authenticated, loading, sucess, sucessCad,google, setSucessCad, handleLogin, handleLogout, setEmail, 
            setPassword, setUserName, setConfirmPassword, handleCadastro, handleLoginGoogle };



}