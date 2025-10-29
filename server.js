const express = require("express");
const app = express();

require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Let's learn full backend development");
});
app.get("/about", (req, res) => {
  res.send("This is the about page");
});
//Nested Routes
app.get("/about/user", (req, res) => {
  res.send("<h1>User Page</h1>");
});

//Route Parameters

app.get("/user/:userid/book/:bookid", (req, res) => {
  res.send("Book id :" + req.params.bookid);
});
app.get("/user/:userid-:bookid", (req, res) => {
  res.send(req.params);
});
//Query Parameters
app.get("/search", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send("Name is " + name + " and age is " + age);
  // res.send(req.query);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
