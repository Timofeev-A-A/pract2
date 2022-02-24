import React from 'react'
import iit from '../IIT colour.png';

function Header() {
    return (
        <header className="Header">
            <img src={iit} className="Header-logo" alt="ИИТ"/>
        </header>
    )
}

export default Header