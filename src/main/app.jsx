import '../common/template/dependencies'
import './estilo.css'

import React, { Component } from "react"

import Header from '../common/template/header'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;