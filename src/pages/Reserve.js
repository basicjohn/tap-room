import React from 'react';
import BeerList from './../components/BeerList';
import { reserve } from '../kegs.json';

function Reserve() {
  return (
    <div className='container'>
      <BeerList beers={reserve} />
    </div>
  );
}

export default Reserve;