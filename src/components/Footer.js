import React from 'react';

const Footer = () => {
    
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer__copy">
            <p className="footer__copy__text">
                #lesdelicesdumexique {year} - Powered by CLDEVS
            </p>
        </div>
    )
}

export default Footer;