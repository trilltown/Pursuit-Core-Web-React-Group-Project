import React, { useState, useEffect } from "react";
import '../css/ProfilePage.css'
// import imgs from '../css/images/logo1.png'
import axios from 'axios';
import LandingNavBar from "./LandingPageNav";

const ProfilePage = () => {
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([])
    const [profilePic, setProfilePic] = useState("")

    const fetchData = async () => {
        try{
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

    useEffect(() => {   
        fetchData()
    }, [])
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
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
         <img src={info.profile_pic} alt=""></img> 
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
    
    const selectProfilePic = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
            data.append('upload_preset', 'the_box')
             const res = await fetch(
            'https://api.cloudinary.com/v1_1/akb48/image/upload', 
            {
                method: 'POST',
                body: data
            })
        const file = await res.json()
        setProfilePic(file.secure_url)
        console.log(profilePic)
    }
    
    const updateProfilePic = async (e) => {
        e.preventDefault();
        const id = sessionStorage.getItem("currentUser")    
        try{
            let res = await axios.patch(`http://localhost:3001/users/${id}`, { profile_pic: profilePic })
            debugger 
            fetchData()
        } catch(err) {
            console.log(err)
         }
    }

    return( 
        <div>
            <nav>
                <LandingNavBar />
            </nav>
            <div className="userInfo">
                {userInfo}
            </div>      
            <div className="file">
                <form onSubmit={updateProfilePic}>
                    <input type="file" onChange={selectProfilePic}/>
                    <button type="submit">Change Pic</button>
                </form>
            </div>
            <div className="userPosts">
                {userPosts}
            </div>
            <br></br>
        </div>
    )
}

export default ProfilePage