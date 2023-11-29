import { useEffect, useState } from "react";

import CountryCardPage from "./CountryCardPage"

const HomePage = () => {

    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');

    const fetchData = async () =>{
        try {
            let countryURL = 'https://restcountries.com/v3.1/all';
            const res = await fetch(countryURL);

            if (res.ok) {
                const data = await res.json();
                setCountries(data);
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchData()
    }, []);

    const handleSearch = (evt) =>{
        setSearchCountry(evt.target.value);
    }

    const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
  );


  return (
    <div className="container">
        <h1 className="text-center mt-4">All Countries</h1>
        <input className="form-control w-50 mx-auto my-3 py-2" value={searchCountry} onChange={handleSearch} placeholder="Search s countries..." type="text" />
        <ul className="card-list p-0 d-flex text-content-start flex-wrap mt-4">
            {filteredCountries.map((country, index)=>(
                <CountryCardPage key={index} data = {country}/>
            ))}
        </ul>
    </div>
  )
}

export default HomePage;