import React from 'react';
import BeerList from './../components/BeerList';
import { smallBatch } from '../kegs.json';

function SmallBatch(props) {
  return (
    <div className='container'>
      <BeerList beers={smallBatch} soldBeer={props.soldBeer} />
    </div>
  );
}

export default SmallBatch;