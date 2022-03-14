const authorModel= require('../models/authorModel')
const mongoose= require('mongoose')


const createAuthor= async function (req, res) {
    
 try{
     let author = req.body
     if(author==null){
         return res.status(401).send({status:false,msg:"pls fill required data"})
     }
     else{
        let authorCreated = await authorModel.create(author)
        return res.status(201).send({status:true,data:authorCreated})
     }
} 
catch (err){
    res.status(500).send({status:false,msg: err.message})
} 
   
}


module.exports.createAuthor=createAuthor
