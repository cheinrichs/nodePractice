const express = require("express");
const app = express();

const host = "localhost";
const port = 8000;

const airlineSearch = require("./routes/airlineSearch.js");

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

app.use("/search", airlineSearch);

app.get("/", (req, res) => {
  res.send("Welcome to Airline Safety Savior!");
});
