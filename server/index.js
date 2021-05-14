const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
require("./db/dbConn");

dotenv.config({path:"./config.env"});
const PORT = process.env.PORT;
const app = express();


app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to home page</h1>");
});





app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
});