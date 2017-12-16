import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductForm from './components/ProductForm';

var arrayProd = [
  {
    nombre: 'computadoras', precio: '1000'
  },
  {
    nombre: 'mouse', precio: '2000'
  },
  {
    nombre: 'laptop', precio: '5000'
  }
]

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p><br/>
        <ProductForm 
          productos = {arrayProd}
        />
      </div>
    );
  }
}

export default App;
