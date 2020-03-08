import React, { useState, useEffect } from "react";
import LandingNavBar from './LandingPageNav'
import { useHistory } from 'react-router-dom';
import '../css/FeedPage.css'
import imgs from '../css/images/logo1.png'

import axios from 'axios'


const FeedPage = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    
        const fetchData = async () => {
            try{
                let res = await axios.get("http://localhost:3001/posts")
                let data = res.data.body  
                setPosts(data)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const postPics = posts.map(post => {
        return <div> <img src={post.post_pic} height="200px" width="200px"></img> <br/> {post.caption} </div>
    })

    return(
        <div>
        <nav>
            <LandingNavBar />
            <input type="image" id="button" src={imgs}></input>
          

        </nav>
        <section>
        <div className="search">
            <input placeholder="Search"></input>
            <br></br>
        </div>
            <br></br>
            <button>Create Post</button>
            <br></br>
        <div className="feed">
            {postPics}
            <p></p>
        </div>
            <button>Load More...</button>

        </section>
        </div>
    )
}



export default FeedPage