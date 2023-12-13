//would normally connect to the database
import { parse } from "csv-parse";
import fs from "fs";

let records = [];

fs.createReadStream("./airlinedata.csv")
  .pipe(parse({ delimiter: ",", columns: true }))
  .on("data", (row) => {
    records.push(row);
  })
  .on("end", () => {
    console.log("done!");
  })
  .on("error", (err) => {
    console.log("error");
  });

function searchAirline(airlineName) {
  if (!airlineName) {
    return { found: false, airline: null };
  }
  console.log(records);
  //Normally a db query SELECT * FROM airlines WHERE name = airlineName
  for (const record of records) {
    if (
      record &&
      record.airline &&
      (record.airline === airlineName || record.airline.includes(airlineName))
    ) {
      console.log("found match", record);
      return { found: true, airline: record };
    }
  }
  return { found: false, airline: null };
}

export default searchAirline;
