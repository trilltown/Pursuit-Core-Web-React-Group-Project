import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    let history = useHistory()
    
    const  handleSignup = async(e) => {
        e.preventDefault()
        let first_name={firstname:e.target.firstname.value}
        let last_name={lastname:e.target.lastname.value}
        let display_name={username:e.target.username.value}
        let profile_pic={profile_pic:e.target.profile_pic.value}
        if(!profile_pic){
            profile_pic="https://img.favpng.com/6/14/19/computer-icons-user-profile-icon-design-png-favpng-vcvaCZNwnpxfkKNYzX3fYz7h2.jpg"
        }
        let newUser={first_name,last_name,display_name,profile_pic}
        
        try{
            let res = await axios.post(`http://localhost:3001/users/`,newUser)
            debugger
            sessionStorage.setItem("currentUser",res.data.body.newUser.id)
            history.push(`/feed`)
     }catch(error){
         console.log(error);
         
     }
    }
    
    return(
        <form id="signupForm" onSubmit={handleSignup}>
            <label>
            First Name
                <input name="firstname" placeholder="First Name" ></input>
            </label>
            <label>
            Last Name
                <input name="lastname" placeholder="Last Name"></input>
            </label>
            <label>
            Username
                <input name="username" placeholder="Username"></input>
            </label>
            <label>
            profilePic
                <input name="profilePic" placeholder="VARCHAR"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignUp
