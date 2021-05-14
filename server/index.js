const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;


const app = express();


app.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to home page</h1>");
});





app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`);
})