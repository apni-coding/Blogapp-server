const { userModel } = require("../models/userModel")
const bcrypt = require('bcrypt');

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

const login = (req, res) => {
    res.send('this is from login')
}

const getUser = async (req, res) => {
    // await userModel.find({})
    res.send('this is from getuser')
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