const posts = require("express").Router()

const {  getAllPosts, getPostByUser, createPost, deletePost, getSinglePost} = require("../queries/posts");



// posts.get("/comments/:id", getAllCommentsByPost)

posts.get("/", getAllPosts);

posts.get("/:id", getPostByUser);

posts.get("/post/:id", getSinglePost)

 posts.post("/", createPost);

 posts.delete("/:id", deletePost)

module.exports = posts;