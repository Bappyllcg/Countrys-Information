import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <div>
                <h1>Error 404!</h1>
                <h2>This page is not found!</h2>
                <p>Go back to <Link to='/'>Homepage</Link></p>
            </div>
        </div>
    );
};

export default NotFound;