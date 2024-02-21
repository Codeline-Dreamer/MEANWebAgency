const mongoose = require("mongoose");
const { Provider } = require("../models/provider");

//connection URI to MongoDB
const url = "mongodb://127.0.0.1:27017/provider_db";

//Make the connection (asychronously)
mongoose
  .connect(url)
  .then((result) => {
    console.log("Successfull Connection running backend !!! "); // call the results like ("Successfull Connection !!!", results) then the results will be seen in terminal
  })
  .catch((error) => console.log(error));

module.exports = Provider;
