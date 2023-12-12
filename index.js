import express from "express";
const app = express();

const host = "localhost";
const port = 8000;

import airlineSearch from "./routes/airlineSearch.js";
import indexRoute from "./routes/index.js";

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

app.use("/search", airlineSearch);

app.use("/", indexRoute);
