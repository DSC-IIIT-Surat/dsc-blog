require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("./config/db")();
const keys = require("./config/keys");
const authRoutes = require("./routes/auth.routes");

const app = express();
const PORT = keys.port;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});
