import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import '../css/ProfilePage.css'
import axios from 'axios';
import LandingNavBar from "./LandingPageNav";

const ProfilePage = () => {
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        
        const fetchData = async () => {
            try{
                let res = await axios.get("http://localhost:3001/users/1")
                let id = sessionStorage.getItem("currentUser")
                let res = await axios.get(`http://localhost:3001/users/${id}`)
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
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let res = await axios.get("http://localhost:3001/posts/1")
                let id = sessionStorage.getItem("currentUser")
                let res = await axios.get(`http://localhost:3001/posts/${id}`)
                let postImages = res.data.body
                setPosts(postImages)
            } catch(error) {
                setPosts([])
                console.log(error)
            }
        }
        fetchPosts()
    }, [])



    let userInfo = user.map(info => {
        return <section>
        <div className="profilePic">
         <img src={info.profile_pic}></img> 
        </div>
         <div className="userName">
         {info.display_name}    
         </div>
         </section>
    })
    
    let userPosts = posts.map(post => {
        return <div>
            <img src={post.post_pic}></img>
            <div>
                <p>{post.caption}</p>
            </div>
        </div>
    })

    return( 
        <div>
        <nav>
            <LandingNavBar />
        </nav>
        <div>
        <div className="userInfo">
        {userInfo}
        </div>      
        <br></br>
        <div className="file">
        <input type="file"/>
        </div>
        <div className="userPosts">
            {userPosts}
        </div>
        </div>
        </div>
    )
}

export default ProfilePage