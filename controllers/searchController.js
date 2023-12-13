import findAirline from "../models/airlineDataModel.js";

const searchAirline = async (req, res) => {
  console.log(req.params.airlineName);
  const airlineName = req.params.airlineName;
  if (!airlineName) {
    res.json({ found: false, airline: null });
  }

  try {
    const result = await findAirline(airlineName, (err, airline) => {
      next(err, airline);
    });

    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

export default searchAirline;
