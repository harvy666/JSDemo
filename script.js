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
