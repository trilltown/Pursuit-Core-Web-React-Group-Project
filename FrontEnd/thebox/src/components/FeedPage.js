import React, { useState, useEffect } from "react";
import LandingNavBar from './LandingPageNav'
import { useHistory } from 'react-router-dom';
import '../css/FeedPage.css'
import imgs from '../css/images/WhiteLogo.png'
import Feed from "./Feed"

import axios from 'axios'


const FeedPage = () => {
    
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false)

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

    const uploadImage = (e) => {
        let file = e.target.files[0];
    }
    return(
        <div>
        <nav>
            <LandingNavBar />
          

        </nav>
            {/* <input type="image" id="logo" src={imgs}></input> */}
        <section>
        <div className="search">
            <input placeholder="Search User"></input>
            <br></br>
        </div>
            <br></br>
            <form>
            <div className="fileUpload">
            <input type="file" name="myFile" placeholder="Upload an Image" onChange={uploadImage}/>
            <button type="button">Choose File(s)</button>
            </div>
            </form>
            <br></br>
        <div className="feed">
            <Feed userPosts={posts}/>
        </div>
            <button>Load More...</button>

        </section>
        </div>
    )
}



export default FeedPage