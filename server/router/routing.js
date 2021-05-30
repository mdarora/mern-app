const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleWare/auth");
const nodemailer = require("nodemailer");

require("../db/dbConn");
const User = require("../db/models/userSchema");
const Message = require("../db/models/messegesSchema");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASS
  }
});

let regUser = {};
let generatedOTP;

const otpViaMail = (email) => {
    const sendOtp = new Promise((resolve, reject) =>{
        const opt = Math.floor(Math.random() * 1000000);

        const mailOptions = {
            from: process.env.MAIL,
            to: email,
            subject: 'Verification code for Mern App',
            text: `Your One Time Password (OTP) for Mern App is ${opt}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            reject({error : "OTP sending failed"});
            } else {
            console.log('Email sent: ' + info.response);
            resolve(opt);
            }
        });
    });

    return sendOtp;
}


router.get("/", async (req, res) =>{

    
    
    res.send("home route of server");
});


router.get("/about", auth, async (req, res) => {
    try {
        const findById = await User.findOne({_id:req.id}, {password: 0, cpassword : 0});
        res.status(200).json({user : findById})
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Something is wrong!"});
    }
});

router.get("/getdata", auth, async (req, res) => {
    try {
        const findById = await User.findOne({_id:req.id}, {name: 1, email : 1, phone : 1});
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

        regUser = {name, email, phone, gender, work, password, cpassword};

        
    
        generatedOTP = await otpViaMail(email);
        console.log("generated otp : " + generatedOTP);
        
        
        res.json({message : "OTP sent to your E-mail"});
        

    } catch (error) {
        res.status(400).json({error : "Something went wrong !"});
        console.log("catched error => ", error);
    }
});

router.post("/verifyOtp", async (req, res) =>{

    if (req.body.enteredOtp != generatedOTP) {
        return res.json({error : "Invalid OTP"});
    }

    try {
        const hashedPassword = await bcrypt.hash(regUser.password, 12);
        const hashedcPassword = await bcrypt.hash(regUser.cpassword, 12);
        

        const newUser = new User({
            name: regUser.name,
            email: regUser.email,
            phone: regUser.phone,
            gender: regUser.gender,
            work: regUser.work,
            password: hashedPassword,
            cpassword : hashedcPassword
        });
        
        const result = await newUser.save();
        res.status(201).json({ message : "Registered successfully"});
    } catch (error) {
        console.log(error);
        res.status(422).json({error:"something went wrong!"})
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

router.post("/contact", async (req, res) =>{
    try {
        const {id, name, email, phone, message} = req.body;
        
        if (!name || !email || !phone || !message){
            return res.status(422).json({error:"All fields are required!"});
        }

        const newMessage = new Message({
            userId:id, name, email, phone, message
        });
        const result = await newMessage.save();
        if (result._id){
            return res.status(201).json({message:"Message sent"});
        } else{
            res.status(500).json({error:"Something is wrong!"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something is wrong!"});
    }
});


router.get("/logout", (req, res) => {
    res.clearCookie("token").status(200).json({message:"logged out"});
});


module.exports = router;