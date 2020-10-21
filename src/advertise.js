import React from 'react';

class AdvertiseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            username: '',
            product: '',
            product_description: '',
            price: 0.0,
            address: '',
        };
        this.showForm = this.showForm.bind(this);
        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
    }

    showForm() {
        this.setState({visible: !this.state.visible});
    }

    mySubmitHandler(event) {
        event.preventDefault();
        let price = this.state.price;
        if(!Number(price)){
            alert("O preço precisa ser um valor numérico")
        }
        else if(price > 0){
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
                {this.state.visible &&
                <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Cadastro de Produto</h4>
                <form class="needs-validation" novalidate onSubmit={this.mySubmitHandler}>
                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="username">Usuário</label>
                        <input type="text" class="form-control" id="username" name="username" onChange={this.myChangeHandler} required/>
                        <div class="invalid-feedback">
                        Nome de usuário inválido.
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="product">Produto</label>
                        <input type="text" class="form-control" id="product" name="product" onChange={this.myChangeHandler} required/>
                        <div class="invalid-feedback">
                        Nome de produto inválido.
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="product_description">Descrição do Produto</label>
                        <input type="text" class="form-control" id="product_description" name="product_description" onChange={this.myChangeHandler} required/>
                        <div class="invalid-feedback">
                        Descrição do Produto inválida.
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="price">Preço</label>
                        <input type="number" step="0.01" min="0" class="form-control" id="price" name="price" onChange={this.myChangeHandler} required/>
                        <div class="invalid-feedback">
                        Valor inválido.
                        </div>
                    </div>
                    </div>
            
                    <div class="mb-3">
                    <label for="address">Endereço</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
                    <div class="invalid-feedback">
                        Por favor, escreva o endereço do seu estabelecimento.
                    </div>
                    </div>
            
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Finalizar Cadastro de Produto</button>
                </form>
                </div>}
            </div>
        );
    }
}

export default AdvertiseForm;