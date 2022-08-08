const express = require("express");
const path = require("path");
const morgan = require("morgan");

// init app
const app = express();
// setup request logging
app.use(morgan("dev"));
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Serve client from build folder
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => res.render("index"));

function getPort() {
  return process.env.PORT || 9000;
}

// Start server
app.listen(getPort(), () => console.log(`Server started -> http://localhost:${getPort()}`));
