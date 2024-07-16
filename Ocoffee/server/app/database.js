const { Client } = require("pg");

const database = new Client(process.env.PG_URL);

database.connect();

module.exports = database;
