import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
//<!-- data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation" aqui embaixo-->

import {Context} from '../../Context/AuthContext'

export default function Header() {
    const {handleLogout, sucess, google} = useContext(Context);
    
    const onSucess = ()=> {
        handleLogout()

    }
    
    return <nav class="navbar navbar-dark bg-dark shadow-sm fixed-top" id="header">
        <div class="container d-flex justify-content-between">
            <div class="navbar-brand d-flex align-items-center">
                <strong>Vila Market</strong>
            </div>            
            <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    Acesse aqui!
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item ><Link to="/search">Buscar Produto</Link></Dropdown.Item>
                    <Dropdown.Item ><Link to="/anuncio">Anuncie Já!</Link></Dropdown.Item>
                    {!sucess && <Dropdown.Item ><Link to="/login">Login</Link></Dropdown.Item>}
                    {sucess && <Dropdown.Item onClick={handleLogout}><Link to="/login">Logout</Link></Dropdown.Item>}
                    {google && <Dropdown.Item ><GoogleLogout
                                                                        clientId="1018672477709-66ruqslkhumtbsotal1psldvefohhhi1.apps.googleusercontent.com"
                                                                        buttonText="Logout"
                                                                        onLogoutSuccess={onSucess}
                                                                        >
                                                                        </GoogleLogout></Dropdown.Item>}
                        
                    
                    
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </nav>

}