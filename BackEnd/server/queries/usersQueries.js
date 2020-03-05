const db = require("../db/index.js")

const getUserById = async (req,res,next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "Got a single user",
        })
    } catch(error) {
        res.json({
            status: "Error",
            message: "No user found"
        })
    }
}

const searchUserByName = async (req,res,next) => {
    try{
        res.status(200).json({
            status: "Success",
            message: "Searched for user by name",
        })
    } catch(error) {
        res.json({
            status: "Error",
            message: "No user found"
        })
    }
}

const getUsersPosts = async (req,res,next) => {
    try{
        res.status(200).json([{
            status: "Success",
            message: "Retrieved users posts"
        }])
    } catch(error) {
        res.json({
            status: "Error",
            message: "Could not get users post"
        })
    }
}

const createUser = async (req,res,next) => {

    try{
        res.status(200).json({
            status: "Success",
            message: "Created a new user",
        })
    } catch(error) {
        res.json({
            status: "Error",
            message: "User already exists"
        })
    }
}

module.exports = {
    getUserById,
    searchUserByName,
    getUsersPosts,
    createUser
};