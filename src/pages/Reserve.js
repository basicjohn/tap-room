import React from 'react';
import BeerList from './../components/BeerList';
import { reserve } from '../kegs.json';

function Reserve(props) {
  return (
    <div className='container'>
      <BeerList beers={reserve} soldBeer={this.handleSellingBeer}/>
    </div>
  );
}

export default Reserve;