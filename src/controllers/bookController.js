const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

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
    else if(ObjectId.isValid(data.author_id)==false || ObjectId.isvalid(data.publisher_id)==false ){
        res.send({msg:"the author is not present"})
    }
    else if(data.publisher_id==undefined || data.publisher_id==""){
        res.send({msg:"publisher details is required"})
    }
    else {
        let authorIdRes= await authorModel.findById(author_id)
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

module.exports.createBook= createBook
module.exports.createBook1=createBook1
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorPublisherDetails = getBooksWithAuthorPublisherDetails
