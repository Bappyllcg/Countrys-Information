import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCountry.css';

const SingleCountry = (props) => {
    const {name, flags, region} = props.country;
    return (
        <div className='single-country'>
            <Link to={`/countrys/${name.common}`}>
                <div className='country-flag'>
                    <img src={flags.svg} alt="" width="200px" />
                </div>
                <h2>{name.common}</h2>
                <p><strong>Region:</strong> {region}</p>
            </Link>
        </div>
    );
};

export default SingleCountry;