const Pool = require("pg").Pool;

const pool = new Pool({
  user: "jlikngbkyrpavd",
  password: "f1b846e1c164a2a7f56d19ad527e5156324df856b666a9bc461d03e8e36c4fb0",
  host: "ec2-34-237-247-76.compute-1.amazonaws.com",
  port: 5432,
  database: "d9p23q4lcn0cfm",
  ssl: true
});

module.exports = pool;
