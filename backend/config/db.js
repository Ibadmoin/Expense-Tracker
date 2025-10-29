const mongoose = require("mongoose");

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("Mongo DB Connected");


    }catch (err) {
        console.log("Error Connecting to MongoDB", err);
        process.exit(1);
    }
}

module.exports = connectdb;