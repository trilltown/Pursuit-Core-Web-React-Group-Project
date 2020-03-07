import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../css/LandingPage.css"
import axios from 'axios'
const LandingPage = () => {

    const [Form,setShowForm] = useState(false)

    
    const handleClick = () =>  {
        debugger
        console.log(Form)
        setShowForm(!Form)
    }
    const handleLogin = async(e) => {
        debugger
        e.preventDefault()
        let display_name = e.target.display_name.value
        try{
        let res = await axios.get(`/users/search/${display_name}`)
        
        debugger
        }catch(error){
            console.log(error);
            
        }

    }

    cosnt handleSignup = async(e) => {
        e.preventDefault()
    }

    const login = ()=>{
        debugger
        return <div>
            <form onSubmit={handleLogin}>
                <input name="display_name" placeholder="username"></input>
                {/* <input name="password" type="password" placeholder="password"></input> */}

            <button type="submit" >submit</button>
            </form>
        </div>
    }

    return(
        <div className="LandingPage">
            <img className="logo" url="./images/logo1.png"></img>
                <header>
                    <button id="logIN" onClick={handleClick}>Login</button>
                    <button id="signUP">Signup</button>
                </header>
                <h1 className="header">The Box.</h1>

                {Form?login():null}

                
        </div>
    )
}

export default LandingPage