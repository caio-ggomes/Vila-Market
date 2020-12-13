import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
//<!-- data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation" aqui embaixo-->


export default props =>
    <nav class="navbar navbar-dark bg-dark shadow-sm fixed-top" id="header">
        <div class="container d-flex justify-content-between">
            <div class="navbar-brand d-flex align-items-center">
                <strong>Vila Market</strong>
            </div>            
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/search">Buscar Produto</Dropdown.Item>
                    <Dropdown.Item href="/anuncio">Anuncie Já!</Dropdown.Item>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </nav>