// import './Beer.css';

function Beer(props) {
  const { id, name, unitsLeftInKeg, pricePerUnit, unitsPerKeg, numberOfKegs, abv, ibu, description } = props.beer;

  // const getPintsLeft = () => {

  // }


  return (
    <div className="beerUnit">
      <div><h2>{name}</h2></div>
      <div className="beerDetail" style={{ padding: '10px' }}>
        <div><p>{description}</p></div>
        <div><h4>${pricePerUnit}.00 per pint | ABV: {abv} | BU: {ibu}</h4></div>
      </div>
      <div className="beerStock" >
        <button type="button" onClick={() => props.soldBeer(id, props.beers)}>-1 Pint</button>
        <p>Available<br />{unitsLeftInKeg}</p>
      </div>
    </div >
  )
}

export default Beer;





