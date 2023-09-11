const mongoose = require("mongoose");
require("dotenv").config();

async function connection() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("succesfully connected to the Mongo DB database");
    } catch (error) {
        console.log(error);
    }
}

connection();