import './item.css'
import React from 'react';
import MapContainer from './map'
import Mapa from './mapa'


class Item extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: props.imageUrl,
            anunciante: props.anunciante,
            description: props.description,
            name: props.name,
            preco: props.preco,
            telefone: props.telefone,
            /*
            produto: props.produto,
            valor: props.valor,
            vendedor: props.vendedor,
            telefone: props.telefone,
            descricao_produto: props.descricao_produto,
            */
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
                    <img className ="image_item" src={this.state.imageUrl} alt=""/>
                </div>
                <div className="info_item">
                    <h3>{this.state.name}</h3>
                    <div class="row">
                        <div class="col-md-9 mb-3">
                            <p>{this.state.description}</p>
                        </div>
                        <h3 class="col-md-3 mb-3 price">
                            <p>R$ {this.state.preco}</p>
                        </h3>
                    </div>
                    {this.state.ampliado &&
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <p>Vendedor: {this.state.anunciante}</p>
                        </div>
                        <div class="col-md-6 mb-3">
                            <p>Telefone: {this.state.telefone}</p>
                        </div>
                        <div class="row">
                        <div>                            
                            <Mapa/>
                            
                        </div>
                        </div>
                    </div>}
                </div>
            </div>

        );
    }
}

export default Item;
    