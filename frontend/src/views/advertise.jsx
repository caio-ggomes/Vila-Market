import React from 'react';
import axios from 'axios';
//import ImageUploader from 'react-images-upload';
import './advertise.css';
import { baseApiUrl } from '../global'
//import Search from './search'

class AdvertiseForm extends React.Component {
    constructor(props) {
        super(props);
        this.stateInicial = {
            visible: false,
            username: '',
            product: '',
            product_description: '',
            price: 0.0,
            phone_number: '',
            product_photo: [],
        };
        this.state = this.stateInicial;
        this.showForm = this.showForm.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    showForm() {
        this.setState({ visible: !this.state.visible });
    }

    onDrop(picture) {
        this.setState({ product_photo: this.state.product_photo.concat(picture), });
    }

    mySubmitHandler(event) {
        event.preventDefault();
        const data = {
            "name": event.target.product.value,
            "description": event.target.product_description.value,
            "telefone": event.target.phone_number.value,
            "categoryId": parseInt(event.target.category.value),
            "anunciante": event.target.username.value,
            "preco": event.target.price.value,
            "imageUrl": event.target.imageUrl.value
        }

        axios.post(`${baseApiUrl}/announcements`, data)
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
                    <h1 class="display-4 font-weight-normal">Anuncie já</h1>
                    <div>
                        <div class="btn btn-outline-secondary" onClick={this.showForm}>
                            {this.state.visible ? 'Fechar formulário' : 'Comece agora!'}
                        </div>
                        <br /><br />
                        {this.state.visible &&
                            <div>
                                <h4 class="mb-3">Cadastro de Produto</h4>
                                <form class="needs-validation" novalidate onSubmit={this.mySubmitHandler}>
                                    <div class="row">
                                        <div class="col-md-8 mb-3">
                                            <label for="product">Produto</label>
                                            <input type="text" class="form-control" id="product" name="product" onChange={this.myChangeHandler} placeholder="Nome do Produto" required />
                                            <div class="invalid-feedback">
                                                Nome de produto inválido.
                                    </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="category">Categoria</label>
                                            <select class="form-control" id="category" name="category" onChange={this.myChangeHandler} required>
                                                <option selected>Escolha...</option>
                                                <option value="1">Comida</option>
                                                <option value="2">Para sua Casa</option>
                                                <option value="3">Eletrônicos</option>
                                                <option value="4">Serviço</option>
                                                <option value="5">Esporte e Lazer</option>
                                                <option value="6">Moda e Beleza</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-5 mb-3">
                                            <label for="username">Seu Nome</label>
                                            <input type="text" class="form-control" id="username" name="username" onChange={this.myChangeHandler} placeholder="Fulano da Silva" required />
                                            <div class="invalid-feedback">
                                                Nome de usuário inválido.
                                    </div>
                                        </div>
                                        <div class="col mb-3">
                                            <label for="phone_number">Telefone</label>
                                            <input type="text" class="form-control" id="phone_number" name="phone_number" placeholder="(12) 012345-6789" onChange={this.myChangeHandler} required />
                                            <div class="invalid-feedback">
                                                Por favor, escreva o seu número de telefone.
                                    </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label for="price">Preço</label>
                                            <div class="input-group">
                                                <span class="input-group-addon">R$ &nbsp;</span>
                                                <input type="number" step="0.01" min="0" class="form-control currency" id="price" name="price" onChange={this.myChangeHandler} placeholder="0.00    " required />
                                                <div class="invalid-feedback">
                                                    Valor inválido.
                                        </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label for="product_description">Descrição do Produto</label>
                                            <textarea rows="4" class="form-control" id="product_description" name="product_description" onChange={this.myChangeHandler} placeholder="Digite aqui a descrição do produto a ser vendido." required>
                                            </textarea>
                                            <div class="invalid-feedback">
                                                Descrição do Produto inválida.
                                    </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <label for="imageUrl">Url da Imagem</label>
                                            <input type="text" class="form-control" id="imageUrl" name="imageUrl" onChange={this.myChangeHandler} placeholder="Url" required />
                                            <div class="invalid-feedback">
                                                Url inválido.
                                    </div>
                                        </div>
                                    </div>

                                    <button class="btn btn-success btn-lg btn-block bg-success" type="submit">Finalizar Cadastro de Produto</button>
                                </form>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdvertiseForm;