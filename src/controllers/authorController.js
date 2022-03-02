const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let data=req.body
    let authors = await AuthorModel.find({
        author_Id:data.author_Id
    })
    if(authors.length>0){
        let authorCreated= await AuthorModel.create(data)
        res.send({msg:authorCreated})
    }
    else{
        res.send({msg:"Detail is required "})
    }
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData