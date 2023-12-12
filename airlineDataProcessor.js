//would normally connect to the database

const airlineProcessor = (airlineName) => {
  console.log("INSIDE airline data processor", airlineName);
  return "processed airline data";
};

module.exports = airlineProcessor;
