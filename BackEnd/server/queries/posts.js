const db = require("../db/index")



const getAllPosts = async (req, res, next) => {
    try{
        let posts = await db.any("SELECT * FROM posts") 
        res.status(200).json({
            status: "Success",
            message: "got all posts",
            body: posts,

         })

    }catch(error){
        console.log(error)
        
    }
}
const getPostByUser = async (req,res, next) => {
    try{
        let posts = await db.any("SELECT *  FROM posts WHERE user_post_id = $1", req.params.id)
        res.status(200).json({
            status: "Success",
            message: "got posts by user",
            body: posts,

         })
    }catch(error){
        res.status(401).json({
            status: "fail",
            message: "did not get post by user"
        })
    }
}

const createPost = async (req,res, next) => {
    try{
        let newPost = await db.one("SELECT INTO posts (post_pic, caption) VALUES (${post_pic}, ${caption} RETURNING *) ")
        res.status(200).json({
            status: "Success",
            message: "Create Post",
            body: newPost

         })
    }catch(error){
        res.status(401).json({
            status: "fail",
            message: "did not create post"
        })
    }
}

module.exports = { getAllPosts, getPostByUser, createPost}