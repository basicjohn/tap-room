import React from 'react';
import BeerList from './../components/BeerList';
import { yearRound } from '../kegs.json';

function YearRound() {
  return (
    <div className='container'>
      <BeerList beers={yearRound} />
    </div>
  );
}

export default YearRound;