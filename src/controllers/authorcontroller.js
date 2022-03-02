const { count } = require("console")
const authorModel = require("../models/authorModel")
const BookModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const getAuthorData= async function(req,res){
    let allbook= await authorModel.find({
        author_name:"Chetan Bhagat"
    }).select({author_id:1,_id:0
    });
    const author_id=allbook[0].author_id;
    const bookList= await bookModel.find({
        'author_id':author_id
    }).select({
        bookName:1,
        _id:0
    })
    res.send({msg:bookList})

}
const updatePrice= async function (req, res){
    let updateBookPrice= await bookModel.findOneAndUpdate({
        bookName:"Two states"
    },
    {$set:{
        "prices.indianPrice":100
    }},
    {new:true},
    {upsert:true}
    

    )
    const author_id=updateBookPrice.author_id;
    const updatedPriceprices=updateBookPrice.prices.indianprice
    const resUpdate= await authorModel.find({
        author_id:author_id
    }).select({
        author_name:1,
        _id:0
    });
    resUpdate.push({
        updatedPriceprices:updatedPriceprices
    })
    res.send({msg:resUpdate})
}



module.exports.createAuthor=createAuthor
module.exports.getAuthorData=getAuthorData
module.exports.updatePrice=updatePrice