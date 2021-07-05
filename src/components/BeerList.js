import Beer from './Beer';
import { v4 as uuid } from 'uuid';

function BeerList(props) {


  return (
    <div className="beersContainer">
      {props.beers.map((beer, index) => <Beer beer={beer} id={index} key={uuid()} />)}
    </div>
  )
}

export default BeerList;