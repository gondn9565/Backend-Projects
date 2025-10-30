const express = require("express");
const app = express();

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//It is used to send form data as request
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

//re.body parser middleware it is used to parse json data from request body when we use post request
app.post("/data", (req, res) => {
  res.send(req.body);
});

//hostname properties is used to get the hostname from the request
app.get("/hostname", (req, res) => {
  res.send("Hostname is " + req.hostname);
});
//ip properties is used to return ips address
app.get("/ip", (req, res) => {
  res.send("IP address is " + req.ips);
});

//method properties is used to get the method of request
app.get("/method", (req, res) => {
  res.send("Method is " + req.method);
});

//originalUrl properties is used to get the original url of the request
app.get("/originalurl", (req, res) => {
  res.send("Original URL is " + req.originalUrl);
});

// path and protocal properties are used to get the path and protocol of the request
app.get("/path-protocol", (req, res) => {
  res.send("Path is " + req.path + " and Protocol is " + req.protocol);
});

// secure properties is used to check whether the request is made over https or not
app.get("/secure", (req, res) => {
  res.send("Is Secure ? " + req.secure);
});

//route property is used to get the route of the request
app.get("/route", (req, res) => {
  res.send("Route is " + req.route);
});

//methods that server accepts
app.get("/methods", (req, res) => {
  if (req.accepts("html")) {
    res.send("HTML Accepted");
  } else if (req.accepts("json")) {
    res.send({ message: "JSON Accepted" });
  } else if (req.accepts("xml")) {
    res.send("xml Accepted");
  } else {
    res.send("Text not  Accepted");
  }
});

//headers methos is to get the headers of the request
app.get("/headers", (req, res) => {
  res.send(req.headers);
});

// req.is methos is used to check in which formet user sending the data to server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
