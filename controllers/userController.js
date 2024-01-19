const { userModel } = require("../models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register = async (req, res) => {
    try {
        const { name, email, password, password2 } = req.body;
        if (!name || !email || !password) {
            return res.status(422).json({ error: "All Fields are Mandatory" })
        };

        const newEmail = email.toLowerCase();
        const isEmailExists = await userModel.findOne({ email: newEmail });
        if(isEmailExists){
            return res.status(422).json({ error: "Email Already Exists" })
        };

        if(password != password2){
            return res.status(422).json({ error: "Password do not match" })
        };

        const hashPassword = bcrypt.hashSync(password, 10);
        const newUser = await userModel.create({name, email:newEmail, password:hashPassword});
        return res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        return res.status(422).json({error:"User Registration Failed."})
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(422).json({error:"All Fields are Required"})
        }
        const newEmail = email.toLowerCase();
        const isuser = await userModel.findOne({ email: newEmail });
        // console.log(isuser);
        if(!isuser){
            return res.status(422).json({error:"Invalid credentials"})
        };

        const isPasswordCorrect = bcrypt.compareSync(password,isuser.password);

        if(!isPasswordCorrect){
            return res.status(422).json({error:"Invalid credentials"})
        };
        const jwtkey = process.env.JWTKEY;
        const token = jwt.sign({id:isuser._id, name:isuser.name}, jwtkey, {expiresIn:'1d'})
        return res.status(200).json({token, id:isuser._id, name:isuser.name});
    } catch (error) {
        console.log(error);
        return res.status(422).json({error:"User Login Failed."})
    }
}

const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await userModel.findById(id);
        if(!user){
            return res.status(422).json({error: "User not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(422).json({error:"Internal Server Error"})
    }
}

const changeAvtar = (req, res) => {
    res.send('this is from changeavatr')
}

const editUser = (req, res) => {
    res.send('this is from edituser')
}

const getAuthors = (req, res) => {
    res.send('this is from getauthors')
}

module.exports = { register, login, getUser, changeAvtar, editUser, getAuthors }