const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URL;

const dbConncet = async()=>{

  try {
    await mongoose.connect(url);
    console.log(`db connected successfuly`);
  } catch (error) {
    console.log(error);
  }
};

module.exports= {dbConncet}