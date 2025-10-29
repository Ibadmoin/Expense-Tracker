const jwt = require("jsonwebtoken");
const User = require("../models/User")

const generateToken= (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1h'})
}

exports.registerUser = async(req,res) => {
    const {fullName,email, password, profile, profileImageURL} = req.body;

    if (!fullname || !email || !password) {
        return res.status(400).json({message:"All feilds are required"});
    }

    try{
        const existingUser = await User.findOne({email});
        
        if (existingUser) return res.status(400).json({message:"Email already in use."});
    }
};
exports.loginUser= async(req,res) => {};
exports.getUserInfo = async(req,res) => {};