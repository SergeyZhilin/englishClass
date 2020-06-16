import React from 'react';
import './loader-style.scss'

const Loader = () => {
    return (
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;