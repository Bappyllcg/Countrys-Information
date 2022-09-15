import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './Navbar.css';

const Navbar = () => {

    // Open and Close Navbar Menu
    const openMenu = () => {
        const winWidth = window.outerWidth;
        if(winWidth < 768){
            const navbarMenu = document.getElementById("menu");
            const bgOverlay = document.querySelector(".overlay");
            navbarMenu.classList.add("is-active");
            bgOverlay.classList.toggle("is-active");
        }
    }
    const closeMenu = () => {
        const winWidth = window.outerWidth;
        if(winWidth < 768){
            const navbarMenu = document.getElementById("menu");
            const bgOverlay = document.querySelector(".overlay");
            navbarMenu.classList.remove("is-active");
            bgOverlay.classList.toggle("is-active");
        }
    }
    // Open and Close Search Bar Toggle
    const showSearch = () => {
        const searchBlock = document.querySelector(".search-block");
        searchBlock.classList.add("is-active");
    }
    const HideSearch = () => {
        const searchBlock = document.querySelector(".search-block");
        searchBlock.classList.remove("is-active");
    }

    // Search
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
    countrys.forEach((item, i) => {
        item.id = i + 1;
    });

    const navigate = useNavigate();
    const handleOnSelect = (item) => {
        navigate(`/countrys/${item.name.common}`);
    }
    const formatResult = (item) => {
        return (
        <>
            <Link to={`/countrys/${item.name.common}`} style={{ display: 'block', textAlign: 'left' }} >name: {item.name.common}</Link>
        </>
        )
    }
    return (
        <header className="header" id="header">
            <nav className="navbar container">
                <Link to="/" className="brand">Brand</Link>
                <div className="burger" id="burger" onClick={openMenu}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <span className="overlay" onClick={closeMenu}></span>
                <div className="menu" id="menu">
                    <ul className="menu-inner">
                        <li className="menu-item"><NavLink to="/" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={closeMenu}>Home</NavLink></li>
                        <li className="menu-item"><NavLink to="region/europe" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={closeMenu}>Europe</NavLink></li>
                        <li className="menu-item"><NavLink to="region/americas" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={closeMenu}>Americas</NavLink></li>
                        <li className="menu-item"><NavLink to="region/asia" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={closeMenu}>Asia</NavLink></li>
                        <li className="menu-item"><NavLink to="region/africa" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={closeMenu}>Africa</NavLink></li>
                        <li className="menu-item"><NavLink to="region/oceania" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={closeMenu}>Oceania</NavLink></li>
                        <li className="menu-item"><NavLink to="region/antarctic" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} onClick={closeMenu}>Antarctic</NavLink></li>
                    </ul>
                </div>
                <span className="bx bx-search search-toggle" onClick={showSearch}>
                    <svg width="20" height="20" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </span>
                <div className="search-block">
                        
                {load === true ? 'Not Loaded' : <ReactSearchAutocomplete
                        items={countrys}
                        autoFocus
                        formatResult={formatResult}
                        fuseOptions={{ keys: ["name.common", "area"] }}
                        resultStringKeyName="altSpellings"
                        onSelect={handleOnSelect}
                        /> }
                    <span className="bx bx-arrow-back search-cancel" onClick={HideSearch}>&#10132;</span>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;