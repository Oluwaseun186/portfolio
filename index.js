require("dotenv").config();
const { MongoClient } = require("mongodb");

const express = require("express");
let ejs = require('ejs');


// set the connection string
const client = new MongoClient('mongodb+srv://testwitholu:4Klh5hx2ARYaDcXm@cluster100.0gfizy3.mongodb.net/?appName=Cluster100');

// path
const path = require("path");

// create a server 
const server = express();

server.use(express.json());

server.use(express.static("public"));

server.set("view engine", "ejs");


server.set("views", "./views");


// ROutes for server
server.get("/", function(request, response){
    //response.send("This is the home response")
    //let indexPath = path.join(__dirname, "public", "index.html");

    //console.log(indexPath);
    //response.sendFile(indexPath);
    response.render("index");
});


server.get("/about", function(request, response){

    response.render("about")

});


server.get("/contact", function(request, response){

    response.render("contactus");

});


server.get("/register", function(request, response){

    response.render("register");


});


server.post("/register-user", async function(request, response){

    console.log(request.body)

    await client.db("testuser").collection("users").insertOne({ firstname: request.body.firstname });

    response.send({
        message: "Registration successful",
        code: 'success'
    });

})

server.get("/products", function(request, response){

    response.send("This is product response");

});


// listen for requests 
server.listen(process.env.PORT, () => console.log(`Server is listening on PORT: ${process.env.PORT}`) );