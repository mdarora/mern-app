const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

dotenv.config({path:"./config.env"});

require("./db/dbConn");

const PORT = process.env.PORT;

app.use(express.json());
app.use(require("./router/routing"));



app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});