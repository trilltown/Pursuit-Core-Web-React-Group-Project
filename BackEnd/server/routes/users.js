const users = require('express').Router();
const {
  getSingleUserById,
  searchUsersByName,
  getUsersPosts,
  createUser
} = require("../queries/usersQueries.js")


users.get("/:id:", getSingleUserById)
users.get("/search/:username", searchUsersByName)
users.get("/posts", getUsersPosts)
users.post("/", createUser)


module.exports = users;
