// import './Beer.css';

function Beer(props) {
  const { name, pricePerUnit, unitsPerKeg, numberOfKegs, abv, ibu, description } = props.beer;

  // const getPintsLeft = () => {

  // }


  return (
    <div className="beerUnit">
      <div className="beerDetail" style={{ padding: '10px' }}>
        <div><h2>{name}</h2></div>
        <div><p>{description}</p></div>
        <div><h4>${pricePerUnit}.00 per pint | ABV: {abv} | BU: {ibu}</h4></div>
      </div>
      <div className="beerStock" >
        <a href="" type="submit" value="-1">-1 Pint</a>
        <p>{unitsPerKeg}</p>
      </div>
    </div>
  )
}

export default Beer;