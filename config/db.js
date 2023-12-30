require('dotenv').config();

const mongoose = require("mongoose")

const connectTOdb = async () => {

    mongoose.connect(process.env.MONGO_URL)  //fetching from dot env
    .then((conn) => {
            console.log(`Connection to DataBase: ${conn.connection.host}`)
        })
    .catch((err) => {
            console.log(err.message);
            process.exit(1)                 //if not connected to db exit
        })
}



module.exports = connectTOdb