import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingNavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/feed"}>Feed</NavLink>
            <NavLink to={"/profile"}>profile</NavLink>
        </nav>
    )
}

export default LandingNavBar; 