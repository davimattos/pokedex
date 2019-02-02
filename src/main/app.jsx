import '../common/template/dependencies'
import './estilo.css'

import React, { Component } from "react"

import Header from '../common/template/header'
import Routes from './routes'
import Pokemon from '../pokemon/pokemonStats'

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Pokemon />
        {/* <Routes /> */}
      </div>
    );
  }
}

export default App;