const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function () {
  const db = process.env.DB;
  const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  mongoose
    .connect(db, connectionParams)
    .then(() => winston.info(`Connected to ${db}...`));
};
