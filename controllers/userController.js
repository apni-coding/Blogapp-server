

const register = (req, res)=>{
    res.send('this is from register')
}

const login = (req, res)=>{
    res.send('this is from login')
}

const getUser = (req, res)=>{
    res.send('this is from getuser')
}

const changeAvtar = (req, res)=>{
    res.send('this is from changeavatr')
}

const editUser = (req, res)=>{
    res.send('this is from edituser')
}

const getAuthors = (req, res)=>{
    res.send('this is from getauthors')
}

module.exports = {register, login, getUser, changeAvtar, editUser, getAuthors}