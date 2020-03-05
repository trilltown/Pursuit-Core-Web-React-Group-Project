const express = require('express');
const {
  getSingleUserById,
  searchUsersByName,
  createUser,
  deleteUsersById
} = require("../queries/usersQueries.js")


users.get("/:id:", getSingleUserById)
users.get("/search/:username", searchUsersByName)
users.get("/posts", getUsersPosts)
users.post("/", createUser)
users.delete("/:id", deleteUsersById)


module.exports = users;
