import React, { Component } from 'react';
// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Admin from './pages/Admin';
import Home from './pages/Home';
import YearRound from './pages/YearRound';
import Seasonal from './pages/Seasonal';
import SmallBatch from './pages/SmallBatch';
import Reserve from './pages/Reserve';
import BeerDetail from './pages/BeerDetail';
// import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    let currentlyVisibleState = null;

    if (this.state.currentPage === 'beerDetail') {
      currentlyVisibleState = <BeerDetail />
    } else if (this.state.currentPage === 'yearRound') {
      currentlyVisibleState = <YearRound />
    } else if (this.state.currentPage === 'seasonal') {
      currentlyVisibleState = <Seasonal />
    } else if (this.state.currentPage === 'smallBatch') {
      currentlyVisibleState = <SmallBatch />
    } else if (this.state.currentPage === 'reserve') {
      currentlyVisibleState = <Reserve />
    } else if (this.state.currentPage === 'admin') {
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
