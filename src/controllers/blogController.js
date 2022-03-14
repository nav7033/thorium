const blogModel = require('../models/blogsModel')
const authorModel = require('../models/authorModel')
const mongoose = require('mongoose')

const moment = require('moment')



const createBlog = async function (req, res) {

    try {
        let blog = req.body
        let authorId = req.body.authorId
        if (!blog) {
            return res.status(401).send({ status: false, msg: "blog data required " })
        }
        else {
            let authorValid = await authorModel.findById({ _id: authorId })
            if (!authorValid) {
                return res.status(401).send({ status: false, msg: "authorId is invalid" })
            }
            else {
                let blogCreated = await blogModel.create(blog)
                return res.status(201).send({ status: true, data: blogCreated })

            }

        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}

const getBlog = async function (req, res) {
    try {
        let authorId = req.query.authorId
        let category = req.query.category
        let allBlogCollection = await blogModel.find({ authorId: authorId, category: category }).populate('authorId')
        if (!allBlogCollection) {
            return res.status(404).send({ status: false, msg: "not found" })
        }
        else {
            return res.status(200).send({ status: true, data: allBlogCollection })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}
/*
- Updates a blog by changing the its title, body, adding tags, adding a subcategory. (Assuming tag and subcategory received in body is need to be added)
- Updates a blog by changing its publish status i.e. adds publishedAt date and set published to true
- Check if the blogId exists (must have isDeleted false). If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
- Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure) 
- Also make sure in the response you return the updated blog document. 




*/

const updateBlog = async function (req, res) {
    try {
        let blogId = req.params.blogId
        let data = req.body
        let blogValidation= await blogModel.find({_id:blogId})

        if(!blogId){
            return res.status(400).send({status:false,msg: "required params"})
        }
        if(!blogValidation){
            return res.status(400).send({status:true,msg:"invalid id "})
        }

        const date= moment()
        const dataUpdate={...data,publishedAt:date,isPublished:true}
        const updated = await blogModel.findOneAndUpdate({_id:blogId},{$set:dataUpdate},{new:true})
        if(!updated){
            return res.status(400).send({status:false,msg:"data not found"})
        }
        else {
            res.status(200).send({status:false,data:updated})
        }

    }
    catch (err) {
        return res.status(500).send({ status: false, msg:err.message })
    }


}
const deleteBlog= async function(req,res){
    try{
        //validate
        let blogId= req.params.blogId
        if(!blogId){
            return res.status(400).send({status:false,msg:"blogId required"})
        }
        let blogIdValidation= await blogModel.find({_id:blogId})
        if(!blogIdValidation){
            return res.status(404).send({status:false,msg:"blogId not valid"})
        }
        let date= moment()
        let deletedBlog = await blogModel.findByIdAndUpdate({_id:blogId},{$set:{isDeleted:true, deleteAt:date}},{new:true})
        return res.status(200).send({status:true,data:deleteBlog})
    }
    catch(err){
        res.status(500).send({status:false,msg: err.message})
    }
}
const queryParamsDelete = async function(req,res){
   try{
    let queryParams = req.query
    if(Object.keys(queryParams == null)){
        return res.status(400).send({status:false,msg:"query input required!"})
    }
    let date = moment()
    const data = await blogModel.updateMany(queryParams,{isDeleted:true,isDeleted:date},{new:true})
    if(!data){
        return res.status(404).send({status:false,msg:"no such document exist"})
    }
    else{
        return res.status(200).send({status:true,msg:data})
    }  
    
   }
   catch(err){
       return res.status(500).send({status:false,msg: err.message})
   }

}





module.exports = {
    createBlog: createBlog,
    getBlog: getBlog,
    updateBlog:updateBlog,
    deleteBlog:deleteBlog,
    queryParamsDelete:queryParamsDelete

}