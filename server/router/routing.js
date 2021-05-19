const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleWare/auth");

require("../db/dbConn");
const User = require("../db/models/userSchema");

router.get("/about", auth, async (req, res) => {
    try {
        const findById = await User.findOne({_id:req.id}, {password: 0, cpassword : 0});
        res.status(200).json({user : findById})
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Something is wrong!"});
    }
});

router.post("/register", async (req, res) => {
    try {
        const {name, email, phone, gender, work, password, cpassword} = req.body;
        
        if (!name || !email || !phone || !gender || !work || !password || !cpassword) {
            return res.status(422).json({error : "All fields are required"});
        } else if (password !== cpassword){
            return res.status(422).json({error : "Both passwords must be same"})
        }

        const findByEmail = await User.findOne({email : email});
        if (findByEmail){
            return res.status(422).json({error : "email already registered"});
        }

        const findByPhone = await User.findOne({phone : phone});
        if (findByPhone){
            return res.status(422).json({error : "Phone number already registered"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const hashedcPassword = await bcrypt.hash(cpassword, 12);
        

        const newUser = new User({name, email, phone, gender, work,
            password: hashedPassword,
            cpassword : hashedcPassword
        });
        
        const result = await newUser.save();
        res.status(201).json({ message : "Registered successfully"});

    } catch (error) {
        res.status(400).send(error);
        console.log("catched error => ", error);
    }
});

router.post("/signin", async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password){
            return res.status(422).json({error : "All fields are required"});
        }

        const findByEmail = await User.findOne({email : email}, {password: 1});
        if (!findByEmail){
            return res.status(400).json({error : "Invalid details"});
        }
        const matchHash = await bcrypt.compare(password, findByEmail.password);
        if (!matchHash){
            return res.status(400).json({error : "Invalid details"});
        }

        const token = jwt.sign({id : findByEmail._id}, process.env.SECRET_KEY);
        res.cookie("token", token);
        res.status(200).json({message : "Logged in"});

    } catch (error) {
        res.status(400).json({catchedError : error});
        console.log("catched error => ", error);
    }
});


module.exports = router;