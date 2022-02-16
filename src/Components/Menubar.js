import React from 'react';
import Watch from 'react-digital-clock';

const Menubar = () => {
    return (
        <>
            <header id="header">
                <div className="container-fluid innerheader">
                    <div className="menubar">
                        <h1>Weather </h1>
                    </div>
                    <div className="timezone">
                        <h5><Watch /></h5>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Menubar
