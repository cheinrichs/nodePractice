import { parse } from "csv-parse";
import fs from "fs";
import { promisify } from "util";

const readFileAsync = promisify(fs.readFile);
const parseAsync = promisify(parse);

const findAirline = async (airlineName) => {
  console.log("FINDING ", airlineName);
  //would normally connect to the database here

  try {
    const csvData = await readFileAsync("./airlinedata.csv", "utf-8");
    const records = await parseAsync(csvData, {
      delimiter: ",",
      columns: true,
    });

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
    console.log("no match found", airlineName);
    return { found: false, airline: null };
  } catch (err) {
    console.error(err);
    return { found: false, airline: null };
  }
};

export default findAirline;
