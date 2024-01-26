const score = {
  wins: 0,
  losses : 0,
  tie: 0
};

updatedScoreElement();

function playGame(playMove) {
  const computerGuess = pick();
  let result = '';

  if(playMove === 'Rock') {
    if(computerGuess === 'Rock') {
      result = 'Tie.';
    } else if(computerGuess === 'Paper') {
      result = 'You Lose.';
    } else if(computerGuess === 'Scissors') {
      result = 'You Win.';
    }

  } else if(playMove === 'Paper') {
    if(computerGuess === 'Rock') {
      result = 'You Win.';
    } else if(computerGuess === 'Paper') {
      result = 'Tie.';
    } else if(computerGuess === 'Scissors') {
      result = 'You Lose.';
    }

  } else if(playMove === 'Scissors') {
    if(computerGuess === 'Rock') {
      result = 'You Lose.';
    } else if(computerGuess === 'Paper') {
      result = 'You Win.';
    } else if(computerGuess === 'Scissors') {
      result = 'Tie.'
    }
  }

  if(result === 'You Win.') {
    score.wins += 1;
  } else if(result === 'You Lose.') {
    score.losses += 1; 
  } else if(result === 'Tie.') {
    score.tie += 1;
  }

  updatedScoreElement();

  document.querySelector('.js-result').innerHTML = result;
    
  document.querySelector('.js-move').innerHTML = `You <img src="images/${playMove}-emoji.png" class="move-input"> 
    <img src="images/${computerGuess}-emoji.png" class="move-input"> Computer`;
}

function updatedScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Tie: ${score.tie}.`;
}

function pick() {
  const randonNumber = Math.random();
  let computerGuess = '';

  if(randonNumber >= 0 && randonNumber < 1/3) {
    computerGuess = 'Rock';
  } else if(randonNumber >= 1/3 && randonNumber < 2/3) {
    computerGuess = 'Paper';    
  } else if(randonNumber >= 2/3 && randonNumber < 1) {
    computerGuess = 'Scissors';
  }

  return computerGuess;
}