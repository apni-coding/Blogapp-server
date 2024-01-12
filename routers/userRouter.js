const express = require('express');
const { register, login, getUser, getAuthors, changeAvtar, editUser } = require('../controllers/userController');
const { userValidation } = require('../middlewares/userValidation');

const userRouter = express.Router();

userRouter.post('/register', userValidation, register);
userRouter.post('/login', login);
userRouter.get('/:id', getUser);
userRouter.get('/', getAuthors);
userRouter.post('/changeavatar', changeAvtar);
userRouter.patch('/edit-user', editUser);

module.exports = {userRouter}