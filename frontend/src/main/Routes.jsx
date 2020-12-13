import React, { useContext }  from 'react'
import {Switch, Route, Redirect} from 'react-router'

import { Context } from '../context/AuthContext';

//importando destinos
import AdvertiseForm from '../components/anuncios/advertise';
import Search from '../components/busca/search';
import Login from '../components/home/Login'

/*export default props =>
    <Switch>
        <Route exact path='/' component = {Login}/>
        <Route path='/search' component = {Search}/>
        <Route path='/anuncio' component = {AdvertiseForm}/>
        <Redirect from='*' to='/' />
    </Switch>
    */

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
    return (
      <Switch>        
        <CustomRoute exact path='/' component = {Login}/>
        <CustomRoute isPrivate path='/search' component = {Search}/>
        <CustomRoute isPrivate path='/anuncio' component = {AdvertiseForm}/>
        <Redirect from='*' to='/' />
      </Switch>
    );
  }