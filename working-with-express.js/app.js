const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRoutes = require("./routes/admin"); // Importing admin routes
const shopRoutes = require("./routes/shop"); // Importing shop routes

app.use(bodyParser.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use(express.static(path.join(__dirname, "public"))); // Serving static files from the public directory

app.use("/admin", adminRoutes);

app.use(shopRoutes); // Using shop routes

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html")); // Fallback for unmatched routes
});

app.listen(3000);
