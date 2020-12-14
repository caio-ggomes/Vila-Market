
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//importando destinos
import AdvertiseForm from '../components/anuncios/advertise';
import Search from '../components/busca/search';
import Login from '../components/home/Login-ctx';
import Cadastro from '../components/home/Cadastro';
import { Context } from '../Context/AuthContext';



function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  /* COLOCAR REDIRECT PRO '*' E PRO CADASTRO*/ 
  return (
    <Switch>
        <CustomRoute exact path='/' component = {Login}/>
        <CustomRoute exact path='/login' component = {Login}/>
        <CustomRoute exact path='/search' component = {Search}/>
        <CustomRoute isPrivate exact path='/anuncio' component = {AdvertiseForm}/>
        <CustomRoute exact path='/cadastro' component = {Cadastro}/>
        <Redirect from='*' to='/' />

    </Switch>
  );
}
