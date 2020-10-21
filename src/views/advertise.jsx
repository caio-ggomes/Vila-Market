import React from 'react';
import ImageUploader from 'react-images-upload';
import './advertise.css';

class AdvertiseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            username: '',
            product: '',
            product_description: '',
            price: 0.0,
            phone_number: '',
            product_photo: [],
        };
        this.showForm = this.showForm.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    showForm() {
        this.setState({visible: !this.state.visible});
    }

    onDrop(picture) {
        this.setState({product_photo: this.state.product_photo.concat(picture),});
    }

    mySubmitHandler(event) {
        event.preventDefault();
        let price = this.state.price;
        if(!Number(price)){
            alert("O preço precisa ser um valor numérico")
        }
        else if(price <= 0){
            alert("O valor precisa ser positivo");
        }
    }

    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
        return(
            <div>
                <div class="btn btn-outline-secondary" onClick={this.showForm}>
                    {this.state.visible ? 'Fechar formulário':'Comece agora!'}
                </div>
                <br/><br/>
                {this.state.visible &&
                <div>
                    <h4 class="mb-3">Cadastro de Produto</h4>
                    <form class="needs-validation" novalidate onSubmit={this.mySubmitHandler}>
                        <div class="row">
                            <div class="col-md-8 mb-3">
                                <label for="product">Produto</label>
                                <input type="text" class="form-control" id="product" name="product" onChange={this.myChangeHandler} placeholder="Nome do Produto" required/>
                                <div class="invalid-feedback">
                                Nome de produto inválido.
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="category">Categoria</label>
                                <select class="form-control" id="category" name="category" onChange={this.myChangeHandler} required>
                                    <option selected>Escolha...</option>
                                    <option value="food">Comida</option>
                                    <option value="house">Para sua Casa</option>
                                    <option value="electronics">Eletrônicos</option>
                                    <option value="service">Serviço</option>
                                    <option value="sports">Esporte e Lazer</option>
                                    <option value="dressing">Moda e Beleza</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-5 mb-3">
                                <label for="username">Seu Nome</label>
                                <input type="text" class="form-control" id="username" name="username" onChange={this.myChangeHandler} placeholder="Fulano da Silva" required/>
                                <div class="invalid-feedback">
                                Nome de usuário inválido.
                                </div>
                            </div>
                            <div class="col mb-3">
                                <label for="phone_number">Número para contato</label>
                                <input type="text" class="form-control" id="phone_number" name="phone_number" placeholder="(12) 012345-6789" onChange={this.myChangeHandler} required/>
                                <div class="invalid-feedback">
                                    Por favor, escreva o seu número de telefone.
                                </div>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="price">Preço</label>
                                <div class="input-group">
                                    <span class="input-group-addon">R$ &nbsp;</span>
                                    <input type="number" step="0.01" min="0" class="form-control currency" id="price" name="price" onChange={this.myChangeHandler} placeholder="10.00" required/>
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
                                <label for="product_photo">Foto do Produto (Opcional)</label>
                                <div class="input-group">
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText='Escolher Foto'
                                        onChange={this.onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                    />
                                </div>
                            </div>
                        </div>
                
                        <button class="btn btn-success btn-lg btn-block bg-success" type="submit">Finalizar Cadastro de Produto</button>
                    </form>
                </div>}
            </div>
        );
    }
}

export default AdvertiseForm;