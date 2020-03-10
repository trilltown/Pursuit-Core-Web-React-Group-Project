import React from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import '../css/LandingPageNav.css'
import imgs from '../css/images/WhiteLogo.png'





const LandingNavBar = () => {
    const history = useHistory();
    const handleLogout = () => {
        alert("You are now leaving 'The Box'")
        sessionStorage.clear("currentUser")
        history.push("/")
    }

    return(
        <header className="toolbar">
        <nav className="toolbar_navigation">
        <button id="logout" onClick={handleLogout}>LOGOUT</button>

        <input type="image" id="logo" onClick={() => history.push('/feed')} src={imgs}></input>
            <div className="toolbar_navigation_items">

            <NavLink to={"/feed"}>Feed</NavLink>
            <NavLink to={"/profile"}>Profile</NavLink>
            </div>
        </nav>
    </header>
    )
}

export default LandingNavBar; 