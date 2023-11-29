const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.CONNECTION_STRING;


const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            "Databse connected",
            connect.connection.host,
            connect.connection.name
        );
    }
    catch(err){
        console.log("kjcbjkcbjk")
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;