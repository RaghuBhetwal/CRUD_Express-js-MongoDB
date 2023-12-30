# Express.js MongoDB CRUD Operations

This repository contains an Express.js Backend application that performs CRUD (Create, Read, Update, Delete) operations using MongoDB as the database. It serves as a basic template for building RESTful APIs with Express.js and MongoDB.


## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js] (https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Make sure MongoDB is installed and running)

## Getting Started
Clone the repository:

     git clone https://github.com/RaghuBhetwal/CRUD_Express-js-MongoDB.git

   
Navigate to the Project Directory:

    cd "Directory-of-folder"
    
Install Dependencies:


    npm install mongoosh, expresss, dotenv

Configure MongoDB Connection:
    
      Create a .env file in the root directory to add MongoDB Url and PORT.

Start the Server:

 
      npm run start or
      nom start
      
     // The API will be accessible at http://localhost:PORT.

### Method and API Routes

    - **POST /createUser:** Create a new user.
    - **GET /getusers:** Retrieve all users.
    - **PUT /edituser/:id:** Update a user by ID.
    - **DELETE /deleteuser/:id:** Delete a user by ID.

### Contributing

    Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are highly appreciated.

### License

     MIT License.

