import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

const Post = ({pInfo}) => {
    const [displyName, setDisplyName] = useState("");
    console.log(pInfo)
    return(
        <div id={pInfo.id}>
        <img src={pInfo.post_pic} height="200px" width="200px" alt="" />
        <p>{pInfo.caption}</p>
        <p>{pInfo.created_at}</p>

        </div>
    )
}

export default Post
