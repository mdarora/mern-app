const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(() => {
    console.log('Connection successful with mongodb');
}).catch((err) =>{
    console.log("Connection failed with mongodb \n", err);
});