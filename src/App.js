import React, { Component } from 'react';
// Components
import Header from './components/Header'
import Footer from './components/Footer'

import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    let currentlyVisibleState = null;

    if (this.state.currentPage === 'keg') {
      currentlyVisibleState = <Keg />
    } else if (this.state.currentPage === 'allKegs') {
      currentlyVisibleState = <AllKegs />
    }  else if (this.state.currentPage === 'admin') {
      // normally check for admin privileges
      currentlyVisibleState = <Admin createKeg={this.createKeg} />
    } else {
      currentlyVisibleState = <Home navigateTo={this.navigateTo} />
    }

    return (
      <div className="App">
        <Header navigateTo={this.navigateTo} />
        {currentlyVisibleState}
        <Footer />
      </div>
    );
  }
}

export default App;
