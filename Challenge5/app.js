var scores, roundScore, activePlayer, gamePlaying;
init();

//click Roll Dice
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //make random number for dice
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        document.querySelector('.dice-0').style.display = 'block';
        document.querySelector('.dice-1').style.display = 'block';
        document.querySelector('.dice-0').src = 'dice-' + dice0 + '.png';
        document.querySelector('.dice-1').src = 'dice-' + dice1 + '.png';

        //active player can roll dice until dice isn't 1
        if (dice1 !== 1 && dice0 !== 1) {
            //update Roundscore
            roundScore += dice1 + dice0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (dice0 === 1 || dice1 === 1) {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else
            nextPlayer();
    }

});

//click Hold
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Update active player Score
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if active player win
        if (scores[activePlayer] >= 100) {
            diceDOM.style.display = 'none';
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('#current-' + activePlayer).textContent = '0';
            gamePlaying = false;
        } else
            nextPlayer();
    }


});

//click New Game
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-1').textContent = 'Player 2';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

}

function nextPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

}
