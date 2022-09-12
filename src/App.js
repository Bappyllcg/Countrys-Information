import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [countrys, setCountrys] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountrys(data))
        .catch(error => console.log(error));
    }, []);
    setTimeout(() => {
        console.log(countrys[0].area);
    }, 2000);
    return (
        <div className='Container'>
            <div className='all-country'>
                {/* { countrys.map(() => <SingleCountry />) } */}
            </div>
        </div>
    );
}

export default App;
