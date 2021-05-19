const jwt = require("jsonwebtoken");

const auth = (req, res, next) =>{
    const token = req.cookies.token;
    if (!token){
        return res.status(401).json({error : "Login first"});
    }
    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        req.id = verifyToken.id;
        next();
    } catch (error) {
        return res.status(401).json({error : "Login first"});
    }
    
}

module.exports = auth;