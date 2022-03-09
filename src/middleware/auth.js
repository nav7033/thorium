const userModel=require("../models/userModel")
const jwt = require("jsonwebtoken")

const tokenAuth=function (req,res,next){
    let userId=req.params.userId
    let token=req.headers["x-Auth-token"]
    const decodeToken = jwt.verify(token,"functionup-thorium")
    if(decodeToken != userId){
        res.send({msg:"token is invalid pls give valid userId"})
    }
    next()
}




const userAuth= function (req,res,next){
    let userData=req.body
    if(!userData){
      res.send({msg:"user data required"})
    }
    next()
}
const loginUserAuth= function(req,res,next){
    let emailId=req.body.emailId
    let password=req.body.password
    if(!emailId && password==null){
      res.send({msg:"userName and password required"})
    }
    next()
}
const getUserAuth= function(req,res,next){
    let token=req.headers["x-Auth-token"]
    if(!token){
        res.send({msg:"token is not available in headers"})
    }
    next()
}
const updateAuth= function(req,res,next){
    let userId=req.params.userId
    if(userId===undefined){
        res.send({msg:"userId required "})
    }
    next()
}
const deleteAuth= function(req,res,next){
    let userId=req.params.userId
    let token=req.headers["x-Auth-token"]
    if(!userId && !token){
        res.send({msg:"userId and token Required"})
    }
    next()
}



module.exports={
    userAuth:userAuth,
    loginUserAuth:loginUserAuth,
    getUserAuth:getUserAuth,
    updateAuth:updateAuth,
    deleteAuth:deleteAuth,
    tokenAuth:tokenAuth
}
