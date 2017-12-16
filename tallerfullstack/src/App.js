import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductForm from './components/ProductForm';
import Dialog from './components/Dialogo';
import SearchBar from './components/SearchBar';
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
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeValue(ev){
    debugger;
    var nombre = ev.target.value;

    this.setState({
      name: nombre
    })
  }
  /*
  componentShouldUpdate() {
    return false;
  }
  */
  componentDidMount() {
    
  }
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
        <br />
        Nombre: <input type="text" placeholder = {'Ingrese nombre ...'} onChange={this.onChangeValue}/>
        <br />
        <br />
        <label style={{textAlign:'center', color:'green'}}
        >{this.state.name}</label>
        < Dialog />
        <SearchBar placeholderProp="Ingrese el texto a buscar" />
      </div>
    );
  }
}

export default App;
