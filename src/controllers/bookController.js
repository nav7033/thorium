const { count } = require("console")
const mongoose = require('mongoose');
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const ObjectId = mongoose.Schema.Types.ObjectId


const createBook= async function (req, res) {
    let book = req.body
    let newBook= await bookModel.create(book)
    res.send({msg:newBook})
}
const createBook1 =async function(req,res){
    let data=req.body
    if(data.author_id===undefined || data.author_id===""){
        res.send({msg:"Detail is Reuired"})
    }
    
    else if(data.publisher_id==undefined || data.publisher_id==""){
        res.send({msg:"publisher details is required"})
    }
    else {
        let authorIdRes= await authorModel.findById(author_Id)
        if(authorIdRes!=null){
            const publisherid=await publisherModel.findById(data.publisher_id)
            if(publisherid!=null){
                const newBook1= await bookModel.create(data)
                res.send({msg:newBook1})
            }
            else{
                res.send({msg:"publisher detail is required"})
            }
            
        }
        else{
            res.send({msg:"author datail is required"})
        }
    }

    

    
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id','publisher_id')
    res.send({data: specificBook})

}
const updatedData= async function(req,res){
     let data = await bookModel.find().populate('author_id','publisher_id').updateMany({publisher_id:"62206ccb7a6845240f1c1ebb",
     publisher_id:"62206d5d7a6845240f1c1ec1"},{$set:{isHardCover:true}},{new:true})
     res.send({msg:data})
} 
const increasePrice= async function(req,res){
    let data = await bookModel.find().populate('author_id').updateMany({ratings:{$gt:3.5}},{$inc:{price:+10}});
    res.send({msg:data})
}


module.exports.createBook= createBook
module.exports.createBook1=createBook1
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorPublisherDetails=getBooksWithAuthorPublisherDetails
module.exports.updatedData=updatedData
module.exports.increasePrice=increasePrice
