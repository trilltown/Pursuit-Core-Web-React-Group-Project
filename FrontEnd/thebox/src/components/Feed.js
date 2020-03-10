import React, { useState } from "react";
import Post from "./post"

const Feed = ({userPosts}) => {
    const [displyName, setDisplyName] = useState("");

    const currentPosts = userPosts.map((post)=>{
        // console.log({userPosts})
        console.log({post,userPosts})
        return <Post pInfo={post} key={post.id}/>
    })
    
    return(
        <form>
            {currentPosts}
        </form>
    )
}

export default Feed