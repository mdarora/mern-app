const express = require("express");
const router = express.Router();

require("../db/dbConn");
const User = require("../db/models/userSchema");

router.get("/", (req, res) => {
    res.status(200).send("<h1>Welcome to router page of server</h1>");
});

router.post("/register", async (req, res) => {
    try {
        const {name, email, phone, gender, work, password, cpassword} = req.body;

        if (!name || !email || !phone || !gender || !work || !password || !cpassword) {
            return res.status(422).json({error : "All feilds are required"});
        } else if (password !== cpassword){
            return res.status(422).json({error : "Both passwords must be same"})
        }

        const findEmail = await User.findOne({email : email});
        if (findEmail){
            return res.status(422).json({error : "email already registered"});
        }

        const findPhone = await User.findOne({phone : phone});
        if (findPhone){
            return res.status(422).json({error : "Phone number already registered"});
        }

        const newUser = new User({name, email, phone, gender, work, password, cpassword});


        const result = await newUser.save();
        res.status(201).json({ message : "Registered successfully", data : req.body});

    } catch (error) {
        res.status(400).json({error : error._message});
        console.log("catched error => ", error._message);
    }
});

router.post("/signin", async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password){
            return res.status(422).json({error : "All fields are required"});
        }

        const findEmail = await User.findOne({email : email});
        if (!findEmail || findEmail.password !== password){
            return res.status(400).json({error : "Invalid details"});
        }

        res.status(200).json({message : "User logged in",
    data : findEmail});

    } catch (error) {
        res.status(400).json({error : error._message});
        console.log("catched error => ", error._message);
    }
});


module.exports = router;