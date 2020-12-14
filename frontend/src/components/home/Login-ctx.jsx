import React, { useContext, useState } from 'react';
import {Redirect} from "react-router";
import { Link } from 'react-router-dom'

import { Context } from '../../Context/AuthContext';


export default function Login() {
  const { authenticated, sucess,sucessCad, setSucessCad, handleLogin, setEmail, setPassword } = useContext(Context);
 


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
                        </form>
                    <a >Não tem uma conta?</a><a> <Link to="/cadastro">Cadastre-se aqui</Link></a>
                    </div>
                </div>
            </div>
}
