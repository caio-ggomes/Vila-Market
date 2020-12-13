import React, { useContext }  from 'react';
import axios from 'axios';
import '../anuncios/advertise.css';
import { baseApiUrl } from '../../global'

import { Context } from '../../context/AuthContext';
import { Component } from 'react';


/*
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.stateInicial = {
            visible: false,
            email: '',
            password: ''
        };
        this.state = this.stateInicial;
        this.showForm = this.showForm.bind(this);
        //this.onDrop = this.onDrop.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    showForm() {
        this.setState({ visible: !this.state.visible });
    }

    mySubmitHandler(event) {
        event.preventDefault();
        const data = {
            "email" : event.target.email.value,
            "password" : event.target.password.value
        }

        // falta consertar
        axios.post(`${baseApiUrl}/signin`, data)
            .then(response => console.log(response))
            .catch((err) => console.log(err))

        this.setState(this.stateInicial)
    }


    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {
        return (
            <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 font-weight-normal">Logando</h1>
                    <div>                        
                        <br /><br />                        
                            <div>
                                <h4 class="mb-3">Login</h4>
                                <form className="needs-validation" novalidate onSubmit={this.mySubmitHandler}>
                                    <div class="row">
                                        <div >
                                            <label for="email">E-mail</label>
                                            <input 
                                                type="email" 
                                                class="form-control" 
                                                id="email" 
                                                name="email" 
                                                onChange={this.myChangeHandler} 
                                                placeholder="exemplo@gmail.com" 
                                                required />
                                            <div class="invalid-feedback">
                                                Email inválido.
                                            </div>
                                        </div>                                        
                                    </div>
                                    <div className="row">
                                        <div >
                                            <label for="password">Senha</label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id = "password" 
                                                name="password"
                                                onChange={this.myChangeHandler}                                          
                                                required/>
                                            <div class="invalid-feedback">
                                                Email inválido.
                                            </div> 
                                            
                                        </div>
                                    </div>

                                    <button 
                                        class="btn btn-success btn-lg btn-block bg-success" 
                                        type="submit">
                                            Login
                                    </button>
                                </form>
                            </div>                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
*/

export default function Login(){
    const { authenticated, handleLogin, myChangeHandler } = useContext(Context);
     

    return (
        <div style={{marginTop:"50px"}}>
            <label for="email">E-mail</label>
            <form onSubmit={(e)=>handleLogin(e)}>
                <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    name="email"
                    //onChange={e=>myChangeHandler(e)} 
                    placeholder="exemplo@gmail.com" 
                    required />
                <label for="password">Senha</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id = "password" 
                    name="password"
                    
                    //onChange={e=>myChangeHandler(e)}                                          
                    required/>

                <button type="submit">Entrar</button>
            </form>
        </div>   
    
    );
  }