import React, { useState, useEffect } from "react";
import LandingNavBar from './LandingPageNav'
import { useHistory } from 'react-router-dom';
import '../css/FeedPage.css'
import imgs from '../css/images/WhiteLogo.png'
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

    const postPics = posts.map(post => {
        return <div> <img src={post.post_pic} height="200px" width="200px"></img> <br/> {post.caption} </div>
    })

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'the_box')
        setLoading(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/akb48/image/upload', 
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }

   //

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
    
            <div className="fileUpload">
            <input type="file" name="myFile" placeholder="Upload an Image" onChange={uploadImage}/>
            {/* <button type="button">Choose File(s)</button> */}
            </div>

            {loading ? (
                <h3>Loading...</h3>
            ): (
                <img src={image} style ={{width: '200px'}} />
            )}
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