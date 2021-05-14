const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength:2
    },
    email : {
        type : String,
        minlength:5,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        lowercase : true,
        enum : ["male", "female", "other"],
        required : true
    },
    work : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    }
});

const User = new mongoose.model("USER", userSchema);

module.exports = User;