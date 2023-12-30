const express = require("express");

// Importing controller functions from userController.js
const { home, createUser, getUsers, deleteUser, editUser } = require("../controllers/userController.js");

// Creating an instance of the Express Router
const router = express.Router();

// Route for the home page
router.get("/", home);

// Route for creating a new user (POST request)
router.post("/createUser", createUser);

// Route for getting all users (GET request)
router.get("/getusers", getUsers);

// Route for editing/updating a user by ID (PUT request)
// Note: I corrected the route path by adding a forward slash (/) before "edituser/:id"
router.put("/edituser/:id", editUser);

// Route for deleting a user by ID (DELETE request)
router.delete("/deleteuser/:id", deleteUser);

// Exporting the router to be used in other parts of your application
module.exports = router;
