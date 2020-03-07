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
        let newPost = await db.one("INSERT INTO posts  (user_post_id, post_pic, caption) VALUES (${user_post_id}, ${post_pic}, ${caption}) RETURNING *", req.body)
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

const deletePost = async (req,res,next) => {
    try{
        await db.none("DELETE FROM posts WHERE id=$1", req.params.id)
        res.status(200).json({
            status: "Success",
            message: "Deleted Post"
         })
    }catch(error){
        res.status(401).json({
            status: "fail",
            message: "Unable to delete post"
        })
    }
}

module.exports = { getAllPosts, getPostByUser, createPost, deletePost}