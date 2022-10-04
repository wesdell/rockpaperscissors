const d = document,
  machineOptions = ["rock", "paper", "scissors"],
  $result = d.querySelector(".winner"),
  $btnReset = d.getElementById("reset"),
  $userOptions = d.querySelectorAll(".user-possibilities button");

let userOption, machineChoice, interval;

const gameStart = () => {
  const calcMachineOptions = () => {
    machineChoice =
      machineOptions[Math.floor(Math.random() * machineOptions.length)];
  };
  const winnerResult = (userChoice) => {
    if (userChoice !== machineChoice) {
      if (userChoice === "rock" && machineChoice === "scissors") {
        return ($result.innerHTML = `You Win!`);
      }
      if (userChoice === "paper" && machineChoice === "rock") {
        return ($result.innerHTML = `You Win!`);
      }
      if (userChoice === "scissors" && machineChoice === "paper") {
        return ($result.innerHTML = `You Win!`);
      }
      return ($result.innerHTML = `You Lose!`);
    }
    return ($result.innerHTML = `It's A Draw!`);
  };
  const resetGame = (e) => {
    d.addEventListener("click", (ev) => {
      if (ev.target === $btnReset) {
        clearTimeout(interval);
        d.getElementById(`${e.target.id}`).classList.remove("selected");
        d.querySelector(`.m-${machineChoice}`).classList.remove("selected");
        $userOptions.forEach((button) => (button.disabled = false));
        $btnReset.disabled = true;
        $result.innerHTML = `...`;
      }
    });
  };

  $userOptions.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      $userOptions.forEach((button) => (button.disabled = true));
      $btnReset.disabled = false;
      calcMachineOptions();
      userOption = e.target.id;
      winnerResult(userOption);
      interval = setTimeout(() => {
        d.getElementById(`${e.target.id}`).classList.add("selected");
        d.querySelector(`.m-${machineChoice}`).classList.add("selected");
      }, 200);
      resetGame(e);
    });
  });
};

gameStart();
