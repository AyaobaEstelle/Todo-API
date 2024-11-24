const express = require("express");
const mongoose = require("mongoose");
const todoRoute = require("./routes/todo.route.js");
const app = express();



app.use(express.json());


app.use("/api/todos", todoRoute);


app.get("/", (req, res) => {
    res.send("API creation with Node.js, MongoDB, and Express");  
});


mongoose.connect("mongodb+srv://abolarinesther98:mUOTM6eht8uJ8KLX@sleekybackend.dozqn.mongodb.net/Todo-App?retryWrites=true&w=majority&appName=SleekyBackend")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    })