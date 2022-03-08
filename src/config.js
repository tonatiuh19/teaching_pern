const { config } = require("dotenv");

config();

module.exports = {
  dbConfig: {
    user: process.env.DB_USER,
    password: "",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
  },
};
