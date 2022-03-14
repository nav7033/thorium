const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema( {
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    title:{
        type:String,
        enum:['Mr','Mrs','Miss'],
        required:true
    },
    email:{
        type:string,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

    
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema)
