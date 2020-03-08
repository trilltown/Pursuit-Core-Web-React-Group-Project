import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    let history = useHistory()

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
    const [displyName, setDisplyName] = useState("");
    
    return(
        <form id="loginForm" onSubmit={handleLogin}>
        <input name="display_name" placeholder="username"></input>
                {/* <input name="password" type="password" placeholder="password"></input> */}
        <button type="submit">submit</button>

        </form>
    )
}

export default Login
