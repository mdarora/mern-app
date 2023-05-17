const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();


dotenv.config();

require("./db/dbConn");

const PORT = process.env.PORT;

app.use(cors(
    {
        "origin" : process.env.CORS_ORIGIN,
        "credentials" : true
    }
));
app.use(express.json());
app.use(cookieParser());
app.use(require("./router/routing"));



app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});