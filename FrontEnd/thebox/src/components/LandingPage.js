import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../css/LandingPage.css"
import axios from 'axios';
import imgs from '../css/images/logo1.png'
import Login from "./Login"
import SignUp from "./Signup"
import Modal from "./Modal"

const LandingPage = () => {

    const [Form,setShowForm] = useState(false)
    const [signUpForm, setsignUpForm] = useState(false)
    const handleLogInClick = () =>  {
        console.log(Form)
        setShowForm(!Form)
    }
    const handleSignUpClick = () =>  {
        console.log(signUpForm)
        setsignUpForm(!signUpForm)
    }


    return(
        <div className="LandingPage">
            <div>
        <div id="leftSide">
            <img className="logo" src={imgs}/>
                <h1 className="header">The Box.</h1>
            </div>
            {/* <img src='FrontEnd/thebox/src/css/images/whitespeaker.jpg' alt=""></img> */}
            </div>
            <div id='rightSide'>
                <header>
                    <button id="logIN" onClick={handleLogInClick}>Login</button>
                    <button id="signUP" onClick={handleSignUpClick}>Signup</button>
                </header>
                </div>


                {Form ? <Modal comp={<Login/>}/>:null}
                {signUpForm ? <Modal comp={<SignUp/>}/>:null}
                
            </div>
    )
}

export default LandingPage