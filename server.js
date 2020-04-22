//requirement variables
const express = require("express");
const mongoose = require("mongoose");

//setup the port
const PORT = process.env.PORT || 8080;

//setup the express app
const app = express();

//configure the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use our public folder by default
app.use(express.static("public"));

//connect our new server to our database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//setup some routes here

//start the server
app.listen(PORT, function() {
    console.log(`Server started, running on port: ${PORT}`);
});