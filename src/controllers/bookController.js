const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel=require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.find({
        "author_id":data.author_id
    }) 
    if(savedData.length>0)
    {
        let savedData= await BookModel.create(data)
        res.send({msg: savedData})
    }
    else{
        res.send({"msg":"do not Accept"})
    }
}

const authorBookPrices= async function(req,res){
    let savedData=await BookModel.find({
        "prices.indianPrice":{$gt:50,$lt:100}
    }).select({
        author_id:1,
        _id:0
    })
    const numArr=[];   
    const idNum= savedData.map(function(ele){ele.author_id})
    for(let i=0;i<idNum.length;i++){
        const nameData= await authorModel.find({
            author_id:idNum[i]
        }).select({author_name:1,_id:0})
        numArr.push(nameData)
    }
        
    res.send({
        'msg':numArr
    })
}
/*const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}
*/



// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.authorBookPrices=authorBookPrices
//module.exports.createBook1=createBook1
//module.exports.getBooksData= getBooksData
//module.exports.updateBooks= updateBooks
//module.exports.deleteBooks= deleteBooks
