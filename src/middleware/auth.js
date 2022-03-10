const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
   
try{
    let token = req.headers["x-auth-token"]
    if(!token){
     return  res.status(400).send({status:false,msg:"token required inside headers"})
    }

    let decodeToken=jwt.verify(token,'Thorium')
    if(!decodeToken){
      return res.status(401).send({status:false, msg:" token invalid"})
    }

}
    
    catch(error){
       res.status(500).send({status:false,msg:"token invalid"})
   }

   next()
 



}


const authorise = function(req, res, next) {
    
    try{
        let userId=req.params.userId
        let token= req.headers["x-auth-token"]
        let decodeToken=jwt.verify(token,"Thorium")
        if(!decodeToken.userId != userId){
         return res.status(400).send({status:false,msg:"token is invalid"})
        }
        let tokenUserId=decodeToken.userId
        
        if(tokenUserId !=userId){
        return res.status(401).send({status:false,msg:"this is not  valid person "})
        }
    

    }
    catch(error){
        res.status(500).send({status:false,msg:error.message})
    }
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise