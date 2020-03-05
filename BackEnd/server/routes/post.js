const post = require"express".Router()

const { getAllCommentsByPost, getPosts, getSinglePost, createPost, deletePost } = require("../../queries/posts");


posts.get("/comments/:id", getAllCommentsByPost)

posts.get("/", getPosts);

posts.get("/:id", getSinglePost);

posts.post("/", createPost);

posts.delete("/", deletePost)

module.exports = posts;