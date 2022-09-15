import React from 'react';

const CountryContent = (props) => {
    const {name, area, population, flags, altSpellings, capital, independent, region, subregion, status, languages, currencies, startOfWeek, idd, timezones, borders, tld, fifa, cca2, cca3, ccn3, unMember, maps} = props.country;
    // currencies Name
    let currencyKey; 
    for (let k in currencies) {
        currencyKey = k;
        break;
    }
    // languages Name
    const regex =/[{}[\]'"]/g;
    const languageObj = JSON.stringify(languages);
    const bordersObj = JSON.stringify(borders);
    return (
        <>
        <div className='country-data-head'>
            <div className='container'>
                <div className='row align-items-md-center px-5'>
                    <div className='country-data-left col-md-7'>
                        <h1>{name.common}</h1>
                        <h2>{`${altSpellings[0]} / ${altSpellings[1]}`}</h2>
                    </div>
                    <div className='country-data-right col-md-5'>
                        <img width="300px" src={flags.svg} alt={`${name.official} Flag`} />
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='country-data-body'>
                <ul>
                    <li><strong>Name:</strong> {name.common}</li>
                    <li><strong>Official Name:</strong> {name.official}</li>
                    <li><strong>Capital:</strong> {capital}</li>
                    <li><strong>Independent:</strong> {independent ? 'Yes' : 'No'}</li>
                    <li><strong>Area:</strong> {area}</li>
                    <li><strong>Population:</strong> {population}</li>
                    <li><strong>Region:</strong> {region}</li>
                    <li><strong>Subregion:</strong> {subregion}</li>
                    <li><strong>Status:</strong> {status}</li>
                    <li><strong>Languages:</strong> {languageObj.replace(regex, ' ')}</li>
                    <li><strong>Currencies:</strong> {currencyKey}</li>
                    <li><strong>Start Of Week:</strong> {startOfWeek}</li>
                    <li><strong>Phone Code:</strong> {`${idd.root}${idd.suffixes[0]}`}</li>
                    <li><strong>Timezones:</strong> {timezones[0]}</li>
                    {bordersObj && <li><strong>Borders Share:</strong> {bordersObj.replace(regex, ' ')}</li>}
                    <li><strong>Tld:</strong> {tld}</li>
                    <li><strong>Fifa:</strong> {fifa}</li>
                    <li><strong>CCA2:</strong> {cca2}</li>
                    <li><strong>CCA3:</strong> {cca3}</li>
                    <li><strong>CCN3:</strong> {ccn3}</li>
                    <li><strong>UN Member:</strong> {unMember ? 'Yes' : 'No'}</li>
                    <li><strong>Location:</strong> <a href={maps.googleMaps} target="_blank" rel="noreferrer">Google Map</a>, <a href={maps.openStreetMaps} target="_blank" rel="noreferrer">Open Street Maps</a></li>
                    
                </ul>
            </div>
        </div>
        </>
    );
};

export default CountryContent;