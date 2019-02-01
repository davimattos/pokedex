import '../common/template/dependencies'
import './estilo.css'

import React, { Component } from "react"

import Header from '../common/template/header'
import Dashboard from '../dashboard/dashboard'
import Footer from '../common/template/footer'

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;