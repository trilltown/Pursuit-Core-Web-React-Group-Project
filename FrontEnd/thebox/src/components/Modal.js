import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/Modal.css'


const Modal = ({post}) => {
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
    
        const fetchData = async () => {
            try{
                let res = await axios.get(`http://localhost:3001/posts/post/${post}`)
                let data = res.data.body.singlePost[0] 
                setPosts(data)
            } catch(error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


 
        return (
        <div className="modalPic"> 
         <img src={posts.post_pic} name="modal-button" height="500px" width="500px"/>
       <br/> {posts.caption} </div>
        )

    return (
        <div className="post-modal">
            <div className="modal-content"></div>

         </div>
    )
}

export default Modal;