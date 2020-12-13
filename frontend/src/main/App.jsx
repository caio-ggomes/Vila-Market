import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom'
//import logo from './logo.svg';


//estilos
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'font-awesome/css/font-awesome.min.css'
import './App.css';

import Header from '../components/template/Header'
import Routes from './Routes'

import history from '../services/history';
import { AuthProvider } from '../context/AuthContext';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <AuthProvider>
          <Router history={history}>
            <Routes />
          </Router>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
