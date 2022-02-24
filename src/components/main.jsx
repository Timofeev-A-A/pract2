import React from 'react'
import rlogo from "../logo.svg";
import nodelogo from "../nodejs.png";

function Main() {
    return (
        <div className="Main">
            <img src={rlogo} className="logo" alt="logo" />
            <img src={nodelogo} className="logo" alt="logo" />
            <div className="text">
                <span>Haha, spinning logos</span>
            </div>
        </div>
    )
}

export default Main