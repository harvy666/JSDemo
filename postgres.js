import pkg from "pg";
const { Client } = pkg;
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "jsdemo",
  password: "palacsinta",
  port: 5432,
});
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

client.query(
  "CREATE TABLE rooms (id serial PRIMARY KEY, label  VARCHAR(255),checked BOOLEAN NOT NULL)",
  (err, res) => {
    console.log(err, res);
  }
);

client.query(
  "INSERT INTO rooms (label,checked) VALUES ('room1',true)",
  (err, res) => {
    console.log(err, res);
    client.end();
  }
);
