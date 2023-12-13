import makeApp from "./app.js";
import database from "./database.js";

const host = "localhost";
const port = 8000;

const app = makeApp(database, host, port);

app.listen(port, () =>
  console.log(`Server is running on port ${host} ${port}`)
);
