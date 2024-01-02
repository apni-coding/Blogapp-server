const express = require('express');
const { register, login, getUser, getAuthors, changeAvtar, editUser } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/:id', getUser);
userRouter.get('/', getAuthors);
userRouter.post('/changeavatar', changeAvtar);
userRouter.patch('/edit-user', editUser);

module.exports = {userRouter}