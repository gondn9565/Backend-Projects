const express = require("express");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("Let's learn full backend development");
});
app.get("/user/:userid/book/:bookid", (req, res) => {
  res.send("Book id :" + req.params.bookid);
});
app.get("search", (rq, res) => {
  res.send(req.query);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
