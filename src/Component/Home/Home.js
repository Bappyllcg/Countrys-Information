import React, { useEffect, useState } from 'react';
import SingleCountry from './SingleCountry';
import './Home.css';

const Home = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountrys(data))
        .catch(error => console.log(error));
    }, [])
    //console.log(countrys[0].idd.suffixes[0]);
    return (
        <div className='container'>
            <div className='all-country'>
                { countrys.map(country => <SingleCountry country={country} key={country.name.common} />) }
            </div>
        </div>
    );
};

export default Home;