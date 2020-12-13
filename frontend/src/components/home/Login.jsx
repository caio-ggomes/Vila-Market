import React from 'react';
import axios from 'axios';
import './Login.css';
import { baseApiUrl } from '../../global'

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
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    showForm() {
        this.setState({ visible: !this.state.visible });
    }

    mySubmitHandler(event) {
        event.preventDefault();
        const data = {
            "email": event.target.email.value,
            "password": event.target.password.value
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
            <div class="position-relative overflow-hidden m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto ">
                    <h1 class="display-4 font-weight-normal">Login</h1>
                    <div className="form-login">
                        <form className="needs-validation" novalidate onSubmit={this.mySubmitHandler}>
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
                                    Email inválido.
                                            </div>
                            </div>
                            <div className="row botao">
                                <button
                                    class="btn btn-success btn-lg btn-block bg-success"
                                    type="submit">
                                    Login
                                    </button>
                            </div>
                        </form>
                    <a href="#">Não tem uma conta? Cadastre-se aqui</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;