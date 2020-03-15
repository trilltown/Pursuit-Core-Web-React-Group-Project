const db = require("../db/index.js")

const getSingleUserById = async (req,res,next) => {
    console.log(req)
    let { id } = req.params
    let singleUser = await db.one("SELECT * FROM users where id = $1", [id])
    try{
        res.status(200).json({
            status: "Success",
            message: "Got a single user",
            body: {
                singleUser
            }
        })
    } catch(error) {
        res.json({
            status: "Error",
            message: "No user found"
        })
        next(error)
    }
}

const searchUsersByName = async (req,res,next) => {
    let { userName } = req.params
    let searchUser = await db.any("SELECT * FROM users where display_name = $1", [userName])
    try{
        res.status(200).json({
            status: "Success",
            message: "Searched for user by name" + userName,
            body: {
                searchUser
            }
        })
    } catch(error) {
        res.json({
            status: "Error",
            message: "No user found"
        })
        next(error)
    }
}

// const changeUserProfilePic = async (req, res, next) => {
//     let { profile_pic } = req.body
//     let { id } = req.params
//     let updatePic = await db.one("UPDATE users SET profile_pic = $1 WHERE id = $2 RETURNING *", [profile_pic, id])
//     try {
//         res.status(200).json({
//             status: "Success",
//             message: "User profile picture updated",
//             body: {
//                 updatePic
//             }
//         })
//     } catch (error) {
//         res.json({
//             status: "Error",
//             message: "Did not update profile pic"
//         })
//         next(error)
//     }
// }

const editUserInfo = async (req, res, next) => {
    try {
        let {display_name, profile_pic} = req.body;
        let id = req.params.id;
        let user = await db.one(`UPDATE users SET  display_name='${display_name}', profile_pic='${profile_pic}' WHERE id=${id} RETURNING *`);
        res.status(200).json({
            status: "success",
            message: "all users posts",
            body: {
                user
            }
        })
    } catch (err){
        res.status(400).json({
            status: "Error",
            message: "Error",
            payload: err
        })
        next()
    }
}

const getUsersPosts = async (req,res,next) => {
    let { id } = req.params
    let usersPosts = await db.any("SELECT * from posts WHERE id = $1 ", [id])
    try{
        res.status(200).json({
            status: "Success",
            message: "Retrieved users posts",
            body: {
                usersPosts
            }
        })
    } catch(error) {
        res.json({
            status: "Error",
            message: "Could not get users post"
        })
        next(error)
    }
}

const createUser = async (req, res, next) => {
    try {
        let {first_name, last_name, display_name, profile_pic} = req.body
        let newUser = await db.one("INSERT INTO users(first_name, last_name, display_name, profile_pic) VALUES ($1, $2, $3, $4) RETURNING *", [first_name, last_name, display_name, profile_pic])
        res.status(200).json({
            status: "Success",
            message: "New User Created",
            body: {
                newUser
            }
        })
    } catch (error) {
        res.json({
        status: "Error",
        message: "User already exists"
    })
    next(error)
    }
}



module.exports = {
    getSingleUserById,
    searchUsersByName,
    editUserInfo,
    getUsersPosts,
    createUser 
};