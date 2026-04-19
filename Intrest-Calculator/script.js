function calculateInterest(event) {
  event.preventDefault();

  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let time = document.getElementById("time").value;

  let simpleInterest = (principal * rate * time) / 100;

  document.getElementById("result").innerText =
    "Simple Interest = " + simpleInterest;
}
