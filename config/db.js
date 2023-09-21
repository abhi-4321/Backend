const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = ()=>{

    const connectionparams = {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    };
    mongoose.connect(process.env.MONGO_URI,connectionparams)
    .then(() =>{
        console.log("Successfully Connected");
    }).catch((err)=>{
        console.log("Can't able to connect"+err)
    })
};

module.exports = connectToDb