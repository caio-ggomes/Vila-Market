import './item.css'
import React from 'react';

class Item extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            produto: props.produto,
            valor: props.valor,
            vendedor: props.vendedor,
            telefone: props.telefone,
            descricao_produto: props.descricao_produto,
            ampliado: false,
        };
        this.extend = this.extend.bind(this);
    }

    extend() {
        this.setState({ampliado: !this.state.ampliado});
    }

    render() {
        return(
            <div className="item list-group-item list-group-item-action list-group-item-light" onClick={this.extend}>
                <div >
                    <img className ="image_item" src={this.state.url} alt=""/>
                </div>
                <div className="info_item">
                    <h3>{this.state.produto}</h3>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <p>{this.state.descricao_produto}</p>
                        </div>
                        <h3 class="col-md-6 mb-3 price">
                            <p>R$ {this.state.valor}</p>
                        </h3>
                    </div>
                    {this.state.ampliado &&
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <p>Vendedor: {this.state.vendedor}</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <p>Telefone: {this.state.telefone}</p>
                        </div>
                    </div>}
                </div>
                
            </div>

        );
    }
}

export default Item;
    