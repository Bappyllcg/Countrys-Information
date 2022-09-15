import React, { useEffect, useState } from 'react';
import SingleCountry from '../Home/SingleCountry';
import '../Home/Home.css';
import Loading from '../../loading.svg';
import { useParams } from 'react-router-dom';

const Region = () => {
    const {regionname} = useParams();
    const [countrys, setCountrys] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setLoad(true);
        fetch(`https://restcountries.com/v3.1/region/${regionname}`)
        .then(res => res.json())
        .then(data => {
            setCountrys(data);
            setLoad(false);
        })
        .catch(error => console.log(error));
    }, [regionname]);
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

export default Region;