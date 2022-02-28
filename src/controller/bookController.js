const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const bookList= async function(req,res){
    
    //const allBook=await getBooksData.find()
    let bookList= await BookModel.find().select({
        bookName:1,
        authorName:1,
        _id:0
    })
    res.send({data:bookList})
    
}

const getBookInYear= async function(req,res){
    let year=req.body.year;
    let getBookInYear= await BookModel.find({"Year":year}).select({bookName:1,_id:0})
    res.send({data:getBookInYear})
}
const getParticularBook= async function(req,res){
    let data= req.body;
    let getParticularBook= await BookModel.find({$or:[{bookName:data},{Year:data}]}).select({bookName:1,Year:1,_id:0})
    res.send({data:getParticularBook})
}
const getXINRBooks= async function(req,res){
    let allBook= await BookModel.find({$or:[{"prices.indianPrice":"Rs.100"},{"prices.indianPrice":"Rs.200"},{"prices.indianPrice":"Rs.500"}]})
    res.send({data:allBook})
}

const getRandomBook=async function(req,res){
    let allBook = await BookModel.find({
        page:{
            $gt:500
        }
        
    })
    res.send({data:allBook})
}



module.exports.createBook=createBook
module.exports={
    bookList:bookList,
    getBookInYear:getBookInYear,
    getParticularBook:getParticularBook,
    getXINRBooks:getXINRBooks,
    getRandomBook:getRandomBook
} 