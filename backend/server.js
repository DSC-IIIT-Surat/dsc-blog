require("dotenv").config();
const express = require("express");

require("./config/db")(); // database connection
const keys = require("./config/keys");

const app = express();
const PORT = keys.port;

app.use(express.json());

app.use("/auth",require("./config/routes/auth"));  //Authentication Stuff

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
