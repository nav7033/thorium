const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
  
    bookName:String,
    authorName:{
        type:String,
        required:true
    },
    Year:Number,
    publisher:{
        type:String,
        required:true
    },
    publicationDetail:{
        country:String,
        place:String,
        language:String
    },
    ISBN:Number,
    category:[String]
    
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //users



// String, Number
// Boolean, Object/json, array