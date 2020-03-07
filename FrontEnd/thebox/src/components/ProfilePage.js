import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import '../css/ProfilePage.css'
import axios from 'axios';

const ProfilePage = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
    
        const fetchData = async () => {
            try{
                let res = await axios.get("http://localhost:3001/users/1")
                // debugger
                let data = Object.values(res.data.body)
                setUser(data)
                console.log(user)
            } catch(error) {
                setUser([])
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
    let userInfo = user.map(info => {
        debugger
        return <div> {info.display_name} <img src={info.profile_pic}></img></div>
    })
    
    return( 

        <div>
        {userInfo}
        </div>      
    )
}

export default ProfilePage