import React from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import '../css/LandingPageNav.css'
=======

// import '../css/LandingPageNav.css'
>>>>>>> 3035876997991b4ddc3ddfeeefffb1273c0ee168


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