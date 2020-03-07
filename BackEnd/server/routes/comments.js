const comments = require('express').Router();
const {
    getAllComments,
    addSingleComment
    // editSingleComment,
    // deleteSingleComment,
} = require("../queries/commentsQueries")

comments.get("/", getAllComments)
comments.post("/", addSingleComment)
// comments.patch("/:id/", editSingleComment)
// comments.delete("/:id/", deleteSingleComment)


module.exports = comments;
