import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../css/LandingPage.css"
import axios from 'axios'
const LandingPage = () => {

    const [Form,setShowForm] = useState(false)
    const [signUpForm, setsignUpForm] = useState(false)

    
    const handleLogInClick = () =>  {
        debugger
        console.log(Form)
        setShowForm(!Form)
    }
    const handleSignUpClick = () =>  {
        debugger
        console.log(signUpForm)
        setsignUpForm(!signUpForm)
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

    const  handleSignup = async(e) => {
        debugger
        e.preventDefault()
        [e.target.name] = e.target.name.value
     try{
         let res = await axios.post(`/users/`)
     }catch(error){
         console.log(error);
         
     }

    }

    const login = ()=>{
        debugger
        return <div>
            <form onSubmit={handleLogin}>
                <input name="display_name" placeholder="username"></input>
                {/* <input name="password" type="password" placeholder="password"></input> */}
                <button type="submit">submit</button>
            </form>
        
        </div>
    }

    
    const signup = () => {
        return( 
     <form onSumbit={handleSignup}>
        <input name="firstname" placeholder="First Name"></input>
        <input name="lastname" placeholder="Last Name"></input>
        <input name="username" placeholder="Username"></input>
        <input name="profile_pic" placeholder="VARCHAR"></input>
        <button type="submit">Submit</button>
     </form>
        )
    }

    return(
        <div className="LandingPage">
            <div>

            <img className="logo" src="../css/images/logo1.png"></img>
            </div>
                <header>
                    <button id="logIN" onClick={handleLogInClick}>Login</button>
                    <button id="signUP" onClick={handleSignUpClick}>Signup</button>
                </header>
                <h1 className="header">The Box.</h1>

                {Form?login():null}
                {signUpForm?signup():null}


                
        </div>
    )
}

export default LandingPage