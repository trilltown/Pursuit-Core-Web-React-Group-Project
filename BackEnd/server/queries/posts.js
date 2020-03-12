const db = require("../db/index")
    const hashMaker = async(post)=>{
    
        let {id,caption}= post
        let capArr = caption.split(" ")
      
        capArr.forEach( async char=>{
          if(char[0]==="#"){
            try{
                await db.one("INSERT INTO hashtags  (tag,search_post_id) VALUES ($1,$2) RETURNING *", [char,id])
            }catch(error){
                console.log(error)
            }
          }
        })
      }



const getAllPosts = async (req, res, next) => {
    try{
        let posts = await db.any("SELECT * FROM posts ORDER BY id DESC") 
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

    console.log(req)
    let {user_post_id,caption} = req.body
    try{
        let newPost = await db.one("INSERT INTO posts  (user_post_id, post_pic, caption) VALUES (${user_post_id}, ${post_pic}, ${caption}) RETURNING *", req.body)
        hashMaker(newPost)
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