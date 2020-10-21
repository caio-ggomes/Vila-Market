import React,{Component} from 'react';
import './search.css'

import Item from './item'
import Categoria from './categoria'

class Search extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            option: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (this.state.option === event ){
            console.log("trocou")
            this.state.option = '';
        }
        
        else
            this.setState({option: event});
    }

    render() {
        return(
            
            <div className="iza-container container">               
                <div className="container container-categories-stripe mt-5 mb-4 category-section-margin-bottom">
                    <div className="row">
                        <div className="col-12 px-0 px-md-4">
                            <ul className="list-unstyled mb-0 list-inline category-stripe pb-3 category-stripe-margin-bottom">
                                
                                < Categoria tipo="food" nome="Comida" url="images/food.png" click={this.handleClick} a href="#teste"/>
                                < Categoria tipo="service" nome="Serviços" url="images/service.png" click={this.handleClick}/>
                            
                            </ul>
                        </div>
                    </div>
                </div>
                               
                {this.state.option == 'food' && 
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        < Item url="https://consul.vteximg.com.br/arquivos/ids/192704-1000-1000/Consul_Geladeira_CRE44AK_Imagem_3_4_1.jpg?v=636971578596230000" produto="geladeira" valor="33.33" vendedor="Joao" telefone="8176654422"/>
                    </div>}
                {this.state.option == 'service' && 
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        < Item url="" produto="Conserto de Carros" valor="50.00" vendedor="Mauricio" telefone="8176654422"/>
                        < Item url="https://a-static.mlcdn.com.br/618x463/bicicleta-aro-24-wendy-fem-18m-convencional-pink/shopbikemulticoisas/3401789890/d0123b2d9ed4658957c4f74e4af0f40b.jpg" produto="Conserto de Bicicleta" valor="30.00" vendedor="Pedro" telefone="8176654422"/>                 
                    </div>}
                
            </div>
        );
    }

}

export default Search;