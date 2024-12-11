function startGame() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("ready").style.display = "block";
}

function startClue() {
  document.getElementById("ready").style.display = "none";
  document.getElementById("clue1").style.display = "block";
}

function checkAnswer1() {
  const answer = document.getElementById("answer1").value.toLowerCase();
  if (answer === "class") {
    document.getElementById("response1").textContent = "Correct! Moving to the next step...";
    setTimeout(() => {
      document.getElementById("clue1").style.display = "none";
      document.getElementById("puzzle").style.display = "block";
    }, 2000);
  } else {
    document.getElementById("response1").textContent = "Oops! Try again!";
  }
}

function checkAnswer(answer) {
  if (answer === 'D') {
    document.getElementById("puzzle-response").textContent = "Correct! Moving to the final treasure!";
    setTimeout(() => {
      document.getElementById("puzzle").style.display = "none";
      startBalloonGame();
    }, 2000);
  } else {
    document.getElementById("puzzle-response").textContent = "Oops! Try again!";
  }
}

function startBalloonGame() {
  const balloonContainer = document.getElementById("balloon-container");
  balloonContainer.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.addEventListener("click", popBalloon);
    balloonContainer.appendChild(balloon);
  }
}

function popBalloon(event) {
  const balloon = event.target;
  balloon.style.visibility = "hidden";

  const remainingBalloons = document.querySelectorAll(".balloon:not([style*='visibility: hidden;'])");
  if (remainingBalloons.length === 0) {
    document.getElementById("game").style.display = "none";
    document.getElementById("final").style.display = "block";
  }
}