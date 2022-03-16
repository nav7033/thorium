const jwt = require('jsonwebtoken')
const blogModel = require('../models/blogsModel')

const authorAuth = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];

        if (!token) {
            return res.status(400).send({ status: false, msg: "token must be present" });
        }
        let decodedToken = jwt.verify(token, "secret-key");
        if (!decodedToken) {
            return res.status(404).send({ status: false, msg: "token is invalid" });
        }
        next()

    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }



}
const getAuth = async (req ,res,next) =>{
    try{
        let authorId = req.body.authorId
        let token = req.headers["x-api-key"]
        let decodedToken = jwt.verify(token,"secret-key")
        if(!authorId){
            authorId = req.query.authorId 
        }
        let authorValid= decodedToken.authorId
        if(authorValid != authorId){
            return res.status(401).send({status:false,msg:"token or authorId is not valid"})
        }

    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
} 




const authorAuthorization = async function (req, res, next) {
    try {

        let token = req.headers["x-api-key"]
        let decodeToken = jwt.verify(token, "secret-key")
        if (!decodeToken) {
            return res.status(400).send({ status: false, msg: "token is invalid" })
        }
        let blogIdValidation = req.params.blogId

        if (!blogIdValidation) {
            blogIdValidation = req.query.blogId

        }
        let authorIdValidation = await blogModel.find({ _id: blogIdValidation }).select({ authorId: 1, _id: 0 })
        console.log(authorIdValidation)
        let auth = authorIdValidation.map(ele => ele.authorId)
        console.log(auth)
        let tokenAuthorId = decodeToken.authorId
        console.log(tokenAuthorId)

        if (tokenAuthorId != auth) {
            return res.status(401).send({ status: false, msg: "this is not  valid person " })
        }
        next();
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}



module.exports = {
    authorAuth: authorAuth,
    authorAuthorization: authorAuthorization,
    getAuth:getAuth
   

}