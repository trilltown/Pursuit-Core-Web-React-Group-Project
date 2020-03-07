const db = require('../db/index')

const addSingleComment = async (req,res,next) => {
    try{
        let { user_comments_id, post_comment_id, body} = req.body
        let addComment = await db.one("INSERT INTO comments (user_comments_id, post_comment_id, body) VALUES ($1,$2,$3) RETURNING *", [user_comments_id, post_comment_id, body])
        res.status(200).json({
            status: "Success",
            message: "Add single comment",
            body: {
                addComment
            }
        })
    } catch (error) {
        res.status(401).json ({
            status: "fail",
            message: "Cannot create comment"
        })
    }
}

const getAllComments = async (req,res,next) => {
    try{
        let getComments = await db.any("SELECT * FROM comments")
        res.status(200).json({
            status: "Success",
            message: "Get All COmments",
            body: {
                getComments
            }
        })
    } catch(error) {
        res.status(401).json ({
            status: "fail",
            message: "Cannot get all comments"
        })
    }
}

module.exports = {
    addSingleComment,
    getAllComments
}