const mongoose = require("mongoose");

const suggestionSchema= new mongoose.Schema({
    fname :{
        type: String,
        required:true
    },
    lname :{
        type: String,
    },
    email :{
        type: String,
        required:true,
        unique: true
    },
    suggestion :{
        type: String,
        required:true
    }
})

// now we need a collection

const Suggestion = new mongoose.model("Suggestion",suggestionSchema);

module.exports= Suggestion;