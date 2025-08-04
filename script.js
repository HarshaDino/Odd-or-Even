   function showResult(score, playerChoice, computerChoice, sumValue) {
      const result = document.getElementById('result');
      const playerScore = document.getElementById('player-score');
      const sum = document.getElementById('sum');
      const hands = document.getElementById('hands');

      result.innerText = score === 1 ? 'You Win!' : 'You Lose!';
      sum.innerText = `Sum: ${sumValue}`;
      hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;

      const currentScore = Number(playerScore.innerText);
      playerScore.innerText = currentScore + score;
    }

    function getResult(playerChoice, resultText) {
      if (resultText === playerChoice) {
        return 1;
      } else {
        return -1;
      }
    }

    function getComputerChoice() {
      let comChoice = (Math.floor(Math.random() * 10))+1;
      console.log(comChoice);
      return comChoice;
    }

    function onClickbtn(playerChoice) {
      const numberInput = document.getElementById('number');
      const playerNum = Number(numberInput.value);

      if (isNaN(playerNum)) {
        alert("Please enter a number first!");
        return;
      }

      const computerNum = getComputerChoice();
      const sumValue = playerNum + computerNum;

      const resultText = sumValue % 2 === 0 ? 'even' : 'odd';
      const score = getResult(playerChoice.value, resultText);
      showResult(score, playerChoice.value, resultText, sumValue);
    }

    function playGame() {
      const startGameButton = document.getElementById('startGameButton');
      startGameButton.onclick = () => {
        const selectedBtn = document.querySelector('input[name="oddeven"]:checked');
        onClickbtn(selectedBtn);
      };

      const endGameButton = document.getElementById('endGameButton');
      endGameButton.onclick = () => endGame();
    }

    function endGame() {
      document.getElementById('player-score').innerText = '0';
      document.getElementById('hands').innerText = '';
      document.getElementById('result').innerText = '';
      document.getElementById('sum').innerText = '';
    }

    playGame();