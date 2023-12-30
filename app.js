require("dotenv").config(); // Enabling dotenv
const express = require("express");
const cors = require("cors"); // To allow cross-origin connection e.g AWS to DB, front end to AWS

const connectTOdb = require("./config/db.js");

const app = express();

// Express Middleware
app.use(express.json()); // Json data
app.use(express.urlencoded({ extended: true })); // URL is encoded
app.use(cors());

// Initialize connection to DB
connectTOdb();



const userRoutes = require("./routes/userRoutes.js");


app.use("/", userRoutes);

module.exports = app;
