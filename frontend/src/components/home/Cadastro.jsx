import React from 'react';
import {Redirect} from 'react-router';
import axios from 'axios';
import './Cadastro.css';
import { baseApiUrl } from '../../global'

class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.stateInicial = {
            visible: false,
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            erro:false,
            sucesso:false,
        };
        this.state = this.stateInicial;
        this.showForm = this.showForm.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    showForm() {
        this.setState({ visible: !this.state.visible });
    }

    mySubmitHandler(event) {
        event.preventDefault();
        const data = {
            "name": event.target.name.value,
            "email": event.target.email.value,
            "password": event.target.password.value,
            "confirmPassword": event.target.confirmPassword.value,
        }

        axios.post(`${baseApiUrl}/signup`, data)
            .then(response => {
                console.log(response.data.token);
                alert("Usuário cadastrado com sucesso!");
                event.target.name.value = "";
                event.target.email.value = "";
                event.target.password.value = "";
                event.target.confirmPassword.value="";
                this.setState({sucesso: true})
                                
            })
            .catch((err) => {
                console.log(err);
                alert("Houve um erro de cadastro, tente novamente.");
                
            })

        this.setState(this.stateInicial)
    }


    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    

    render() {
        return (
            <div class="position-relative overflow-hidden m-md-3 text-center bg-light">
                {this.state.sucesso && <Redirect to='/login'/>}
                <div class="col-md-5 p-lg-5 mx-auto ">
                    <h1 class="display-4 font-weight-normal">Cadastro</h1>
                    <div className="form-login">
                        <form className="needs-validation" novalidate onSubmit={this.mySubmitHandler}>
                            <div class="row">
                                <label for="name">Nome</label>
                                <input 
                                    class="form-control"
                                    id="name"
                                    name="name"
                                    onChange={this.myChangeHandler}
                                    placeholder="Fulano da Silva"
                                    required />
                                <div class="invalid-feedback">
                                    Nome inválido.
                                </div>
                            </div>
                            <div class="row">
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
                            <div className="row">
                                <label for="password">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    onChange={this.myChangeHandler}
                                    required />
                                <div class="invalid-feedback">
                                    Senha inválida.
                                </div>
                            </div>
                            <div className="row">
                                <label for="confirmPassword">Confirmar senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    onChange={this.myChangeHandler}
                                    required />
                                <div class="invalid-feedback">
                                    Senha inválida.
                                </div>
                            </div>
                            <div className="row botao">
                                <button
                                    class="btn btn-success btn-lg btn-block bg-success"
                                    type="submit">
                                    Cadastre-se!
                                </button>
                            </div>
                        </form>
                                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Cadastro;