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
        unique : true,
        required : true
    },
    phone : {
        type : Number,
        unique : true,
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
    },
    dateJoined: {
        type : Date,
        default : Date.now()
    }
});

const User = new mongoose.model("USER", userSchema);

module.exports = User;