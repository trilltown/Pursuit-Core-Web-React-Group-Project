const db = require("../db/index")


const searchHash = async (req, res, next) => {
    console.log(req.query)
    let hashQuery =req.query.hashtag
    console.log(hashQuery)
            try{
            let hash = await db.any("SELECT * FROM hashtags WHERE tag LIKE $1", [`#${hashQuery}`]) 
        
                    if(hash.length){
            
                        res.status(200).json({
                            status: "Success",
                            message: "tags found",
                            body: hash
                        })
                    } else{
                            res.status(200).json({
                                status: "fail",
                                message: " no tags found",
                            })

                    }
                
            }catch(error){
                console.log(error)
                
            }

            }


module.exports = {searchHash}