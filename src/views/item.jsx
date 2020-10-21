import './item.css'
import React from 'react';

export default props =>

<div className="item list-group-item list-group-item-action list-group-item-light">
    <div >
        <img className ="image_item" src={props.url} alt=""/>
    </div>
    <div className="info_item">
        <p>Produto: {props.produto}</p>
        <p>Valor: {props.valor}</p>
        <p>Vendedor: {props.vendedor}</p>
        <p>Telefone: {props.telefone}</p>
    </div>
    
</div>
    
    