const CountryCardPage = (props) => {

    const {name, flags, population , region, capital} = props.data;
  return (
    <li className="card">
      <img className="card-img-top" src={flags.png} alt={name.common} height="200"/>
      <div className="card-body">
        <h5 className="card-title">{name.common}</h5>
        <p className="card-text">{`Population: ${population.toLocaleString()}`}</p>
        <p className="card-text">{`Region: ${region}`}</p>
        <p className="card-text">{`Capital: ${capital}`}</p>
      </div>
    </li>
  )
}

export default CountryCardPage