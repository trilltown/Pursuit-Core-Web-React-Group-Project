const users = require('express').Router();
const {
  getSingleUserById,
  searchUsersByName,
  changeUserProfilePic,
  getUsersPosts,
  createUser
} = require("../queries/usersQueries")


users.get("/:id", getSingleUserById)
users.get("/search/:userName", searchUsersByName)
users.patch("/:id", changeUserProfilePic)
users.get("/posts/:id", getUsersPosts)
users.post("/", createUser)


module.exports = users;
