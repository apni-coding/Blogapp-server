const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routers/userRouter');
const { postRouter } = require('./routers/postRouter');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors({origin:`http://localhost:3000`}));

app.use('/api/posts', postRouter);
app.use('/api/users', userRouter );


const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is listen at port: ${port}`)
})