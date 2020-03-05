const express = require('express');
const {
  getUserById
} = require("../queries/usersQueries.js")

users.get("/:id:", getUserById)
users.get("/search/:username", searchUserByName)
users.post("/",insertSingleUser)
users.delete("/:id", deleteUsersById)

module.exports = users;
