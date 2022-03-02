const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    author_Id: String,
    name:String,
    headQuater:String

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)