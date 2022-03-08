const { Pool } = require("pg");
const { dbConfig } = require("./config");

const db = new Pool(dbConfig);

module.exports = db;
