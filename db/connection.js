const mongoose = require("mongoose");
const DTABASE_URL = process.env.DTABASE_URL



mongoose
  .connect(DTABASE_URL)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));
