const express = require('express');
const {
  getUserById,
  searchUsersByName,
  insertSingleUser,
  deleteUsersById
} = require("../queries/usersQueries.js")


users.get("/:id:", getSingleUserById)
users.get("/search/:username", searchUsersByName)
// get usersPosts
users.post("/",insertSingleUser)
users.delete("/:id", deleteUsersById)

module.exports = users;
