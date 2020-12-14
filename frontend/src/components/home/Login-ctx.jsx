import React, { useContext } from 'react';
import {Redirect} from "react-router";
import { Link } from 'react-router-dom'

import GoogleLogin from 'react-google-login';
import api from '../../api';

import { Context } from '../../Context/AuthContext';
import './Login.css'


export default function Login() {
  const { sucess,sucessCad, setSucessCad, handleLogin, setEmail, setPassword, handleLoginGoogle } = useContext(Context);
  
  var aux = false;



  const responseGoogle = (response) => {
    
    setPassword(response.tokenId)
    
    
    api.get(`/users/${String(response.profileObj.email)}`)
    .then(res=>{
        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHH")
        console.log(res.data)
        if(res.data){
            ;
            handleLoginGoogle()}
        else{
            aux = true;
        }})
    

  }
  


    return <div class="position-relative overflow-hidden m-md-3 text-center bg-light">
            {sucess && <Redirect to="/anuncio"/>}
            {setSucessCad(false)}
            {console.log(sucessCad)}
                <div class="col-md-5 p-lg-5 mx-auto ">
                    <h1 class="display-4 font-weight-normal">Login</h1>
                    <div className="form-login">
                        <form >
                            <div class="row">
                                <label for="email">E-mail</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="exemplo@gmail.com"
                                    required />
                                <div class="invalid-feedback">
                                    Email inválido.
                                        </div>
                            </div>
                            <div className="row">
                                <label for="password">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    onChange={e => setPassword(e.target.value)}
                                    required />
                                <div class="invalid-feedback">
                                    Email inválido.
                                            </div>
                            </div>
                            <br></br>
                            <div className="row botao">
                                <button
                                    class="btn btn-success btn-lg btn-block bg-success"
                                    type="button"
                                    onClick={handleLogin}>
                                    Login
                                    </button>
                                    </div>
                                    <br></br>
                                <div className="row botaoGoogle">
                                <GoogleLogin
                                    clientId="1018672477709-66ruqslkhumtbsotal1psldvefohhhi1.apps.googleusercontent.com"
                                    
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            
                        </form>
                    <a >Não tem uma conta?</a><a> <Link to="/cadastro">Cadastre-se aqui</Link></a>
                    <br></br>
                    {aux && <p className="Sem_cadastro">Email não cadastro!</p>}
                    </div>
                </div>
            </div>
}
