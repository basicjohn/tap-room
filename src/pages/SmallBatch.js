import React from 'react';
import BeerList from './../components/BeerList';
import { smallBatch } from '../kegs.json';

function SmallBatch(props) {
  return (
    <div className='container'>
      <BeerList beers={smallBatch} department={'smallBatch'} sellBeer={props.sellBeer} />
    </div>
  );
}

export default SmallBatch;