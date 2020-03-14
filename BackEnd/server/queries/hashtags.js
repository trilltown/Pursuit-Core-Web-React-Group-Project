const db = require("../db/index")

const postsByHash= async PostList=>{
    try{
        let newPost= []
        
        while(PostList.length){

                let {search_post_id}=PostList[0]
                let hash = await db.any("SELECT * FROM posts WHERE id = $1", [search_post_id]) 
                newPost.push(...hash)
                PostList.shift()
    
        }
            console.log({newPost})
        
        return newPost
        
                
        }catch(error){
            console.log(error)
            
        }

}

const searchHash = async (req, res, next) => {
    console.log(req.query)
    let hashQuery =req.query.hashtag
    console.log(hashQuery)
            try{
            let hash = await db.any("SELECT * FROM hashtags WHERE tag LIKE $1", [`#${hashQuery}`]) 
        
                    if(hash.length){

                        let newList= await postsByHash(hash)
                        console.log(newList)
                        res.status(200).json({
                            status: "Success",
                            message: "tags found",
                            body: newList
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