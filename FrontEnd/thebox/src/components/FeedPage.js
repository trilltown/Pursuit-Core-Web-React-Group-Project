import React, { useState, useEffect } from "react";
import LandingNavBar from './LandingPageNav'
import { useHistory } from 'react-router-dom';
import '../css/FeedPage.css'
import imgs from '../css/images/WhiteLogo.png'
import Modal from './Modal'
import axios from 'axios'


const FeedPage = () => {
    
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [caption, setCaption] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [focusPost,setFocusPost] = useState("")

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

    const toggleModal = (id) => {
        // debugger
        setFocusPost(id)
        setShowModal(!showModal) 
    }

    const postPics = posts.map(post => {
        return <div> 
         <img src={post.post_pic} name="modal-button" height="200px" width="200px" onClick={() => toggleModal(post.id)}/>
       <br/> {post.caption} </div>
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

    const handleCaption = (e) => {
        setCaption(e.target.value)
    }

    const handleClick = async (e) => {
        let id = sessionStorage.getItem("currentUser")
        const post = {
            "user_post_id": id,
            "post_pic": image,
            "caption": caption
        }
        axios.post("http://localhost:3001/posts", post)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
   
    return(
        <div>
        <nav>
            <LandingNavBar/>
        </nav>
        <section>
        <div className="search">
            <input placeholder="Search #Hashtags"></input>
            <br></br>
        </div>
            <br></br>
            <form className="fileUpload" onSubmit={handleClick}>
            <input type="file" name="myFile" placeholder="Upload an Image" onChange={uploadImage}/>
            <input  id="caption" name="caption" placeholder="Comment" onChange={handleCaption}></input>
            <button type="submit">Create Post</button>
            </form>
            {loading ? (
                <h3>Loading...</h3>
            ): (
                <img src={image} name="modal-button" style ={{width: '200px'}} />
            )}
            <br></br>
        <div className="feed">
            {postPics}
            <p></p>
        </div>
            <button >Load More...</button>

        </section>
                
        {showModal ? <Modal post={focusPost} /> : null} 
        
       

        </div>
    )
}


////
export default FeedPage