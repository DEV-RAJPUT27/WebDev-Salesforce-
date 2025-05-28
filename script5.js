function calculate() {
  let bill = parseFloat(document.getElementById("bill").value);
  let tip = parseFloat(document.getElementById("tip").value);
  let people = parseInt(document.getElementById("people").value);

  if (isNaN(bill) || isNaN(tip) || isNaN(people) || people <= 0) {
    alert("Please enter valid numbers!");
    return;
  }

  let totalTip = bill * (tip / 100);
  let total = bill + totalTip;
  let split = total / people;

  document.getElementById("result").innerText =
    "Each person pays: ₹" + split.toFixed(2);
}

function reset() {
  document.getElementById("bill").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("people").value = "";
  document.getElementById("result").innerText = "";
}
