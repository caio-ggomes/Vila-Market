import React,{Component} from 'react';
import './search.css'

import Item from './item'
import Categoria from './categoria'


class Search extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            option: ''            
        };
        /* Esse this.list deve ser substituido pela funçao que vai fazer a busca no banco de dados*/ 
        this.listFood = [
                {
                    "id": 1,
                    "url":"https://marmitexdesucesso.com/wp-content/uploads/2019/10/como-montar-uma-quentinha-para-vender-1200x900.jpg",
                    "produto":"Quentinha",
                    "descricao_produto": "Filé a parmegiana, arroz e feijão tropeiro",
                    "valor":"10.25",
                    "vendedor":"Joao",
                    "telefone":"8176654422",
                },
                {
                    "id": 2,
                    "url":"https://conteudo.imguol.com.br/c/entretenimento/9d/2020/05/26/hamburguer-recheado-na-churrasqueira-1590524861807_v2_450x337.jpg",
                    "produto":"Hamburguer",
                    "descricao_produto": "Hamburguer 180g com queijo cheddar e farofa de bacon",
                    "valor":"15.00",
                    "vendedor":"Mauricio",
                    "telefone":"8176654422",
                }
            ]
        this.listService = [
                {
                    "id": 1,
                    "url":"https://consul.vteximg.com.br/arquivos/ids/192704-1000-1000/Consul_Geladeira_CRE44AK_Imagem_3_4_1.jpg?v=636971578596230000",
                    "produto":"Conserto de Geladeira",
                    "descricao_produto": "Problemas de Vazamento",
                    "valor":"33.33",
                    "vendedor":"Joao",
                    "telefone":"8176654422",
                },
                {
                    "id": 2,
                    "url":"https://a-static.mlcdn.com.br/618x463/bicicleta-aro-24-wendy-fem-18m-convencional-pink/shopbikemulticoisas/3401789890/d0123b2d9ed4658957c4f74e4af0f40b.jpg",
                    "produto":"Conserto de Bicicleta",
                    "descricao_produto": "Lubrificação e troca de correias, troca de pneus",
                    "valor":"33.33",
                    "vendedor":"Joao",
                    "telefone":"8176654422",
                }
        ]
        
        this.handleClick = this.handleClick.bind(this);
        
    }
    

    handleClick(event) {
        if (this.state.option === event ){
            console.log("trocou")
            this.setState({option: ''});
        }
        
        else
            this.setState({option: event});
    }

    renderRows(list){
        return list.map(item =>{
            return (
                    < Item url={item.url} produto={item.produto} valor={item.valor} vendedor={item.vendedor} telefone={item.telefone} descricao_produto={item.descricao_produto}/>
            )
        })
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
               

                {this.state.option === 'food' && 
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        {this.renderRows(this.listFood)}
                    </div>}
                {this.state.option === 'service' && 
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        {this.renderRows(this.listService)}
                    </div>}
                

            </div>
        );
    }

}

export default Search;