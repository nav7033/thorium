const UserModel= require("../models/userModel")

const newBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBook= await UserModel.find()
    res.send({msg: allBook})
}

module.exports.newBook= newBook
module.exports.bookList= bookList