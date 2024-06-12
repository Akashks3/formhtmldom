document.getElementById("submit").onclick = function () {
  document.getElementById("table").style.display = "inline-block";
  const table = document.getElementById("table");
  const row = table.insertRow(-1);
  const firstname = row.insertCell(0);
  const lastname = row.insertCell(1);
  const username = row.insertCell(2);
  const address = row.insertCell(3);
  const pin = row.insertCell(4);
  const gender = row.insertCell(5);
  const food = row.insertCell(6);
  const state = row.insertCell(7);
  const country = row.insertCell(8);
  firstname.innerHTML = document.getElementById("validationCustom01").value;
  lastname.innerHTML = document.getElementById("validationCustom02").value;
  username.innerHTML = document.getElementById(
    "validationCustomUsername"
  ).value;
  address.innerHTML = document.getElementById("validationCustom03").value;
  pin.innerHTML = document.getElementById("validationCustom04").value;
  gender.innerHTML = document.getElementById("exampleRadios1").value;
  food.innerHTML = document.getElementById("validationCustom05").value;
  state.innerHTML = document.getElementById("validationCustom06").value;
  country.innerHTML = document.getElementById("validationCustom07").value;
  return false;
};
