import React, { useEffect, useState } from 'react';
import SingleCountry from './SingleCountry';
import './Home.css';
import Loading from '../../loading.svg';

const Home = () => {
    window.scrollTo(0, 0);
    const [countrys, setCountrys] = useState([]);
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            setCountrys(data);
            setLoad(false);
        })
        .catch(error => console.log(error));
    }, []);
    return (
        <div className='all-countrys-area'>
            <div className='container'>
                <div className='all-country p-r'>
                    {load === true ? <img className='loading' src={Loading} alt="Loading"  /> :  countrys.map(country => <SingleCountry country={country} key={country.name.common} />) }
                </div>
            </div>
        </div>
    );
};

export default Home;