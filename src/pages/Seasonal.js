import React from 'react';
import BeerList from './../components/BeerList';
import { seasonal } from '../kegs.json';

function Seasonal() {
  return (
    <div className='container'>
      <BeerList beers={seasonal} />
    </div>
  );
}

export default Seasonal;