const { Client } = require("pg");

const client = new Client({
    connectionString: "postgres://postgres@localhost:5432/node-bcrypt-sql"
});

client.connect();

module.exports = client;