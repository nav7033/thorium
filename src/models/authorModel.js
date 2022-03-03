const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_Id:Number,
    authorName: String,
    age:Number,
    address:String,
    ratings:String

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)
