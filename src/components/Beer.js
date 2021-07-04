// import './Beer.css';

function Beer(props) {
  const { name, pricePerUnit, unitsPerKeg, numberOfKegs, abv, ibu, description } = props.beer;

  // const getPintsLeft = () => {

  // }


  return (
    <div>
      <div className="BeerDetail" style={{ padding: '10px' }}>
        <h2>{name}</h2>
        <p>{description}</p>
        <h4>${pricePerUnit}.00 per pint | ABV: {abv} | BU: {ibu}</h4>
      </div>
      <div className="beerStock" >
        <a href="" type="submit">-1 Pint</a>
        {/* <p>{pintsLeft}</p> */}
      </div>
    </div>
  )
}

export default Beer;