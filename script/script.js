const inputNumber = document.querySelector(".input_number");
const submitBtn = document.querySelector(".submit-btn");
const resetButton = document.querySelector("reset-btn");
let randomNumber;
let attempts = 1;
let maxAttempts = 11;

function random() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
}
random();

function check() {
  console.log("hidden number=", randomNumber);
  if (randomNumber === parseInt(inputNumber.value)) {
    document.getElementById("correct_number").innerHTML = inputNumber.value;
    document.getElementById("guess").innerHTML =
      "🎉 Correct! You guessed it in " + attempts + " tries.";

    random();
  } else {
    document.getElementById("correct_number").innerHTML = "Not correct";
    attempts++;
    if (attempts >= maxAttempts) {
      submitBtn.disabled = true;
      location.reload(true);
    }
  }
}
