import React from 'react';
import Watch from 'react-digital-clock';

const Menubar = () => {
    return (
        <>
            <header id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="menubar">
                                <h1>Weather App</h1>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="timezone">
                                <h6><Watch /></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Menubar
