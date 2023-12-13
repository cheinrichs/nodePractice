import express from "express";
import airlineSearch from "./routes/airlineSearch.js";
import indexRoute from "./routes/index.js";

export default function (database, host, port) {
  const app = express();

  app.use(express.json());
  app.use("/search", airlineSearch);

  app.use("/", indexRoute);

  return app;
}
