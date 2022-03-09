const jwt = require("jsonwebtoken");
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let userId=req.params.userId
    let token = req.headers["x-auth-token"]
    if(!token){
        res.send({status:false,msg:"token required inside headers"})
    }

    let decodeToken=jwt.verify(token,'functionup-thorium')
    if(!decodedToken){
        res.send({status:false, msg:" token invalid"})
    }
    
   


    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userId=req.params.userId
    let token= req.headers["x-auth-token"]
    let decodeToken=jwt.verify(token,"functionup-thorium")
    let tokenUserId=decodeToken.userId
    
    if(tokenUserId !=userId){
        res.send({status:false,msg:"this is not  valid person "})
    }
    next()
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise