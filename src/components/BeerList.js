import Shoe from './Shoe';
import { v4 as uuid } from 'uuid';

function BeerList(props) {
  const beersContainer = {

  }

  return (
    <div style={beersContainer}>
      {props.beers.map((beer, index) => <Beer beer={beer} id={index} key={uuid()} />)}
    </div>
  )
}

export default BeerList;