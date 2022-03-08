const { Pool } = require("pg");

const db = new Pool({
  user: "alejandrogomez",
  password: "",
  host: "localhost",
  database: "tasksdb",
});

module.exports = db;
