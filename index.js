const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(express.json());

app.use(cors({origin:`http://localhost:3000`}));




const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is listen at port: ${port}`)
})