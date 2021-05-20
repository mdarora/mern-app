const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },    
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: Number,
        required:true
    },
    message:{
        type: String,
        required:true
    },
    messageDate:{
        type : Date,
        default : Date.now()
    }
});

const Message = new mongoose.model("Message", messageSchema);

module.exports = Message;