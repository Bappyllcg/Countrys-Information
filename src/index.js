import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap-grid.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import CountryPage from './Component/SingleCountry/CountryPage';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/NotFound/NotFound';
import ScrollToTop from './scrollToTop';
import Region from './Component/Region/Region';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="countrys" element={<Home />}></Route>
        <Route path='region/:regionname' element={<Region />} ></Route>
        <Route path="countrys/:countryname" element={<CountryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
