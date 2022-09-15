import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className="bo-wrap clr3">
                <div className="bo-footer container">
                    <div className="row">
                        <div className="bo-footer-power col-md-6">
                            <Link to='/about'>About</Link> | <Link to='/policy'>Policy</Link> | <Link to='/contact-us'>Contact Us</Link>
                        </div>
                        <div className="bo-footer-power col-md-6 right">
                            Powered By JK - <a href="http://www.jobaerulkaes.com/">Web &amp Apps Developer</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bo-wrap clr4">
                <div className="bo-footer">
                    <div className="bo-footer-copyright">&copy;2013 BangaliOnline.com All rights reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;