// Importing the User model from the userModel.js file
const User = require("../models/userModel.js");

// Controller function for the home route
exports.home = (req, res) => {
    // Sending a simple "Hello World" message as a response
    res.send("Hello World");
};

// Controller function for creating a new user
exports.createUser = async (req, res) => {
    try {
        // Extracting the 'name' and 'email' from the request body
        const { name, email } = req.body;

        if (!name || !email){
            throw new Error("Name and Email are required")
        }
        const userExist = User.findOne({email})
        
        if (userExist){
            throw new Error("Name and email already exists")
        }

        // Using the User model to create a new user in the database
        const user = await User.create({
            name,
            email
        });

        // Responding with a JSON object containing information about the new user
        res.status(201).json({
            status: "User created succesfully",      //status: true
            data: {
                user
            }
        });
    } catch (error) {
        // Handling errors and responding with a 500 status code and an error message
        res.status(400).json({
            status: "error",  //status: false
            message: "Internal server error-400"
        });
    }
};

// Controller function for getting all users
exports.getUsers = async (req, res) => {
    try {
        // Using the User model to find all users in the database
        const users = await User.find({});

        res.status(200).json({
            success: true,
            users
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal server error-400"
        });
    }
};


// Controller function for deleting a user by ID
exports.deleteUser = async (req, res) => {
    try {
        // Getting data from URL params
        const userId = req.params.id;

        const user = await User.findByIdAndDelete(userId);

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error-500"
        });
    }
};



// Controller function for editing/updating a user by ID
exports.editUser = async (req, res) => {
    try {
        // Using the User model to find and update the user by ID with the data from the request body
        const user = await User.findByIdAndUpdate(req.params.id, req.body);

       
        res.status(200).json({
            success: true,
            message: "User updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error-500"
        });
    }
};
