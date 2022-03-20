const authorModel = require('../models/authorModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const emailValidator = require('email-validator')



const titleValid = function(title){
   return ["Mr", "Mrs", "Miss"].indexOf(title) !== -1

}



const createAuthor = async function (req, res) {

    try {
        let author = req.body
        let email = req.body.email
        
        if (Object.keys(author) == 0) {
            return res.status(401).send({ status: false, msg: "pls fill required data" })
        }
        let firstName = author.firstName
        if(!firstName){
            res.status(401).send({status:false ,msg:" required FirstName"})
            return
        }
        let lastName = author.lastName
        if (!lastName) {
            res.status(401).send({ status: false, msg: "lastName Required" })
            return
        }
        let title = author.title
        if(!titleValid(title)){
            res.status(400).send({status:false,msg:"please enter valid title"})
            return
        }
        
        let password = author.password
        if (!password) {
            res.status(401).send({ status: false, msg: "required password" })
            return
        }
        if (emailValidator.validate(email)) {
            let authorCreated = await authorModel.create(author)
            return res.status(201).send({ status: true, data: authorCreated })
        }
        else {
            res.status(400).send({ status: false, msg: "invalid Email" })
        }
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }

}
// Phase 02
const loginAuthor = async function (req, res) {
    try {
        let userName = req.body.email;
        let password = req.body.password;

        let author = await authorModel.findOne({ email: userName, password: password });
        if (!author)
            return res.status(400).send({ status: false, msg: "username or the password is not correct" });


        let token = jwt.sign({ authorId: author._id }, "secret-key");
        res.setHeader("x-api-key", token);
        res.status(200).send({ status: true, data: token });
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })

    }
}



module.exports.createAuthor = createAuthor
module.exports.loginAuthor = loginAuthor
