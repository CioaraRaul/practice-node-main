const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next(); // sends a response to the client
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next(); // sends a response to the client
});

app.use("/users", (req, res, next) => {
  console.log("Middleware 4");
  res.send("<h1>The users page</h1>"); // sends a response to the client
});

app.use("/", (req, res, next) => {
  console.log("Middleware 3");
  res.send("<h1>Hello from express</h1>"); // sends a response to the client
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
