const posts = require("express").Router()

const {  getAllPosts, getPostbyUser, createPost } = require("../queries/posts");



// posts.get("/comments/:id", getAllCommentsByPost)

posts.get("/", getAllPosts);

posts.get("/:id", getPostByUser);

 posts.post("/", createPost);

// posts.delete("/", deletePost)

module.exports = posts;