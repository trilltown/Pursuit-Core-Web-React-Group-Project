const hashTags = require("express").Router()
const {searchHash} = require("../queries/hashtags")

hashTags.get("/search",searchHash)

module.exports = hashTags;