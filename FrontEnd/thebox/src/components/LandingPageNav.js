import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingNavBar = () => {
    return(
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink>
            <NavLink to={"/SignUp"}>Signup</NavLink>
            <NavLink to={"/Login"}>Login</NavLink>
        </nav>
    )
}

export default LandingNavBar; 