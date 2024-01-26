const express = require('express');
const cors = require('cors');
const upload = require('express-fileupload')

const { userRouter } = require('./routers/userRouter');
const { postRouter } = require('./routers/postRouter');
const { dbConncet } = require('./config/dbConfig');

require('dotenv').config();

const app = express();

app.use(upload());

app.use(express.json());

app.use(cors({origin:`http://localhost:3000`}));

app.use('/uploads', express.static(__dirname + '/uploads') ) //location where user avatar is stored



app.use('/api/posts', postRouter);
app.use('/api/users', userRouter );


const port = process.env.PORT;
app.listen(port, ()=>{
    dbConncet()
    console.log(`Server is listen at port: ${port}`)
})