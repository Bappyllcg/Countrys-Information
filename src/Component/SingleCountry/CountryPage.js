import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryContent from './CountryContent';
import Loading from '../../loading.svg';
import './SingleCountryPage.css';

const CountryPage = () => {
    const {countryname} = useParams();

    const [country, setCountry] = useState({});
    const [load, setLoad] = useState(true);
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
        .then(res => res.json())
        .then(data => {
            setCountry(data[0]);
            setLoad(false);
        })
        .catch(error => console.log(error));
    }, [countryname]);
    return (
        <div className='single-country-page-area p-r'>
            {load === true ? <img className='loading' src={Loading} alt="" /> : <CountryContent country={country} key={country.area} /> }
        </div>
    );
};

export default CountryPage;