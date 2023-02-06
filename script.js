///////////////////////////////////////////////

console.log("hello Script");

let checkbox1 = document.getElementById("room1");
console.log(checkbox1.checked);

let checkbox2 = document.getElementById("room2");
console.log(checkbox2.checked);

let checkbox3 = document.getElementById("room3");
console.log(checkbox3.checked);

let checkbox4 = document.getElementById("room4");
console.log(checkbox4.checked);

let checkboxes = Array.from(document.getElementsByName("box"));
console.log(checkboxes);

// for (let i = 0; i < checkboxes.length; i++) {
//   if (checkboxes[i].type === "checkbox") {
//     console.log("element" + i);
//   }
// }

function allChecked() {
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
  });
}

function allUnChecked() {
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

//COPIED postgres.js into script.js lets see if it works on the long run

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
