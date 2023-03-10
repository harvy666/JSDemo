import exp from "express";
const express = exp;
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`---Server running on http://localhost:${port}---`);
});

//////////////////////////////////////////////
import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "jsdemo",
  password: "palacsinta",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("---------Connected!---------"))
  .catch((e) => console.log(e));

client.query(
  "CREATE TABLE IF NOT EXISTS rooms (id serial PRIMARY KEY, label  VARCHAR(255),checked BOOLEAN NOT NULL)",
  (err, res) => {
    console.log(err, res);
  }
);

client.query(
  "INSERT INTO rooms (label,checked) VALUES ('room1',true)",
  (err, res) => {
    console.log(err, res);
  }
);

client
  .query("SELECT * from rooms")
  .then((results) => console.table(results.rows))
  .catch((e) => console.error(e.stack));
