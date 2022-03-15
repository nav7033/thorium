const authorModel = require('../models/authorModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


const createAuthor = async function (req, res) {

    try {
        let author = req.body
        if (author == null) {
            return res.status(401).send({ status: false, msg: "pls fill required data" })
        }
        else {
            let authorCreated = await authorModel.create(author)
            return res.status(201).send({ status: true, data: authorCreated })
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
