// import './Beer.css';

function Beer(props) {
  const { name, pricePerUnit, unitsPerKeg, numberOfKegs, abv, ibu, description } = props.beer;

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
        <a type="button" onClick={() => props.sellPint(props.name)}>-1 Pint</a>
        <p>Available<br />{unitsPerKeg}</p>
      </div>
    </div >
  )
}

export default Beer;