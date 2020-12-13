import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

//importando destinos
import AdvertiseForm from '../components/anuncios/advertise';
import Search from '../components/busca/search';
import Login from '../components/home/Login'
import Teste from '../components/busca/mapa2'



export default props =>
    <Switch>
        <Route exact path='/' component = {Login}/>
        <Route path='/search' component = {Search}/>
        <Route path='/anuncio' component = {AdvertiseForm}/>
        <Route path='/mapa' component = {Teste}/>
        <Redirect from='*' to='/' />
    </Switch>