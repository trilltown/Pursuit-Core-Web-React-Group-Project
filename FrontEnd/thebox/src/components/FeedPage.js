import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
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
        <section>
        <div>
            <input></input>
            <br></br>
            <button>Create Post</button>
        </div>
        
        <div>
            {postPics}
            <p></p>
            <button>Load More...</button>
        </div>

        </section>
    )
}

export default FeedPage