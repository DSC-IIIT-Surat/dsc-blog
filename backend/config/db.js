const mongoose = require("mongoose");
const keys = require("./keys");

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(keys.mongodbURI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });

    console.log(`Database up and running on ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDatabase;
