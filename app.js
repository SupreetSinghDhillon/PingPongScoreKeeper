const winningScoreSelect = document.querySelector("#playto");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const reset = document.querySelector("#reset");
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
winningScoreSelect.addEventListener("change", function () {
  console.log("I am at selector");
  resetFunction();
});

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === parseInt(winningScoreSelect.value)) {
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
      p2Display.classList.add("has-text-danger");
      p1Display.classList.add("has-text-success");
    }
    p1Display.innerText = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  console.log("I am at b1");
  if (!isGameOver) {
    p2Score += 1;
    console.log(p2Score, parseInt(winningScoreSelect.value));
    if (p2Score === parseInt(winningScoreSelect.value)) {
      p1Display.classList.add("has-text-danger");
      p2Display.classList.add("has-text-success");
      isGameOver = true;
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.innerText = p2Score;
  }
});

reset.addEventListener("click", function () {
  winningScoreSelect.value = 3;
  resetFunction();
});

const resetFunction = function () {
  p1Button.disabled = false;
  p2Button.disabled = false;
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.innerText = 0;
  p2Display.innerText = 0;
  p1Display.classList.remove("has-text-danger", "has-text-success");
  p2Display.classList.remove("has-text-danger", "has-text-success");
};
