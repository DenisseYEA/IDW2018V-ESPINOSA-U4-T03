var mongoose = require("mongoose");

module.exports = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        match: /.+@.+\..+/,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    }
});