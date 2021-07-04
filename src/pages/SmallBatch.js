import React from 'react';
import BeerList from './../components/BeerList';
import { smallBatch } from '../kegs.json';

function SmallBatch() {
  return (
    <div className='container'>
      <BeerList beers={smallBatch} />
    </div>
  );
}

export default SmallBatch;