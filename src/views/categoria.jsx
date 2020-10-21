import React from 'react';

export default props =>
    <li className="list-inline-item" onClick={e => props.click(props.tipo)}>
        <div className="btn btn-outline-secondary" name="food" >
            <span className="icon-background">
                <img src={props.url} alt=""/>
            </span>
            <small> &nbsp; {props.nome}</small>
        </div>
    </li>