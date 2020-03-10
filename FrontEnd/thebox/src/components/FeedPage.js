import React, { useState, useEffect } from "react";
import LandingNavBar from './LandingPageNav'
import { useHistory } from 'react-router-dom';
import '../css/FeedPage.css'
import imgs from '../css/images/WhiteLogo.png'

import axios from 'axios'

{/* <input name="file" type="file"
   class="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/> */}

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

    const uploadImage = (e) => {
        let file = e.target.files[0];
    }

   
    // const handleUpload = async(e) => {
    //     debugger
    //     let file = e.target.files
    //     const formData = new formData()
    //     formData.append('image', {file})

    //     try{
    //         let res = await axios.post("http://localhost:3001/posts")
    //     } catch(error) {
    //         console.log(error)
    //     }
    // }


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
            {postPics}
            <p></p>
        </div>
            <button>Load More...</button>

        </section>
        </div>
    )
}



export default FeedPage