const post = require"express".Router()

const {  getAllPost  } = require("../../queries/posts");


// posts.get("/comments/:id", getAllCommentsByPost)

posts.get("/", getAllPosts);

// posts.get("/:id", getSinglePost);

// posts.post("/", createPost);

// posts.delete("/", deletePost)

module.exports = posts;