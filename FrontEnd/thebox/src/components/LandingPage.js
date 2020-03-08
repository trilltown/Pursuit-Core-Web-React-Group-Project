import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "../css/LandingPage.css"
import axios from 'axios';
import imgs from '../css/images/logo1.png'
const LandingPage = () => {

    const [Form,setShowForm] = useState(false)
    const [signUpForm, setsignUpForm] = useState(false)
    const history = useHistory()

    
    const handleLogInClick = () =>  {
        console.log(Form)
        setShowForm(!Form)
    }
    const handleSignUpClick = () =>  {
        console.log(signUpForm)
        setsignUpForm(!signUpForm)
    }
    const handleLogin = async(e) => {
        e.preventDefault()
        let display_name = e.target.display_name.value
        let url=`http://localhost:3001/users/search/${display_name}`
        try{
        let res = await axios.get(url)
        let user=res.data.body.searchUser
            if(user.length){
                sessionStorage.setItem("currentUser",user[0].id)
                history.push(`/feed`)
            }else{
                alert("fail")
            }
        }catch(error){
            console.log(error);
        }
    }

    const  handleSignup = async(e) => {
        debugger
        e.preventDefault()
        let firstname={firstname:e.target.firstname.value}
        let lastname={lastname:e.target.lastname.value}
        let username={username:e.target.username.value}
        let profilePic={profile_pic:e.target.profile_pic.value}

     try{
         let res = await axios.post(`http://localhost:3000/users/`)
         console.log(res.data);         
         history.push(`/feed`)
     }catch(error){
         console.log(error);
         
     }

    }

    const login = ()=>{
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
            <div>
     <form onSubmit={handleSignup}>
        <input name="firstname"placeholder="First Name"></input>
        <input name="lastname" placeholder="Last Name"></input>
        <input name="username" placeholder="Username"></input>
        <input name="profile_pic" placeholder="VARCHAR"></input>
        <button type="submit">Submit</button>
     </form>
     </div>
        )
    }

    return(
        <div className="LandingPage">
            <div>

            <img className="logo" src={imgs}/>
            <img src='FrontEnd/thebox/src/css/images/whitespeaker.jpg' alt=""></img>
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