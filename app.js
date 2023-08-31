const winningScoreSelect = document.querySelector("#playto");
const reset = document.querySelector("#reset");
let isGameOver = false;

const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

function updateScore(player, opponent) {
  console.log(player, winningScoreSelect.value);
  if (!isGameOver) {
    player.score++;
    if (player.score === parseInt(winningScoreSelect.value)) {
      console.log(player, winningScoreSelect.value);
      isGameOver = true;
      player.button.disabled = true;
      opponent.button.disabled = true;
      opponent.display.classList.add("has-text-danger");
      player.display.classList.add("has-text-success");
    }
    player.display.innerText = player.score;
  }
}

winningScoreSelect.addEventListener("change", function () {
  resetFunction();
});

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

reset.addEventListener("click", function () {
  winningScoreSelect.value = 3;
  resetFunction();
});

const resetFunction = function () {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = 0;
    p.display.classList.remove("has-text-danger", "has-text-success");
    p.button.disabled = false;
  }
};
