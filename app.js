require("dotenv").config();
const { MongoClient } = require("mongodb");

const express = require("express");
let ejs = require("ejs");

// set the connection string
const client = new MongoClient(
  "mongodb+srv://testwitholu:4Klh5hx2ARYaDcXm@cluster100.0gfizy3.mongodb.net/?appName=Cluster100"
);

// path
const path = require("path");

// create a app
const app = express();

app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("views", "./views");

// ROutes for app
app.get("/", function (request, response) {
  //response.send("This is the home response")
  //let indexPath = path.join(__dirname, "public", "index.html");

  //console.log(indexPath);
  //response.sendFile(indexPath);
  response.render("index");
});

app.get("/about", function (request, response) {
  response.render("about");
});

app.get("/contact", function (request, response) {
  response.render("contactus");
});

app.get("/register", function (request, response) {
  response.render("register");
});

app.post("/register-user", async function (request, response) {
  console.log(request.body);

  await client
    .db("testuser")
    .collection("users")
    .insertOne({ firstname: request.body.firstname });

  response.send({
    message: "Registration successful",
    code: "success",
  });
});

app.get("/products", function (request, response) {
  response.send("This is product response");
});

// listen for requests
app.listen(process.env.PORT, () =>
  console.log(`Server is listening on PORT: ${process.env.PORT}`)
);
