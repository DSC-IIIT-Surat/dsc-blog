require("dotenv").config();
const express = require("express");

require("./config/db")(); // database connection
const keys = require("./config/keys");

const app = express();
const PORT = keys.port;

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
