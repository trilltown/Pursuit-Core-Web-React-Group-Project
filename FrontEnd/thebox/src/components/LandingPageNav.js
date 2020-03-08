import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/LandingPageNav.css'

const LandingNavBar = () => {
    return(
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_navigation_items">
            <NavLink to={"/feed"}>Feed</NavLink>
            <NavLink to={"/profile"}>profile</NavLink>
            </div>
        </nav>
    </header>
    )
}

export default LandingNavBar; 