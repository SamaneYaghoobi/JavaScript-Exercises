var scores, roundScore, activePlayer, gamePlaying;
var diceDOM = document.querySelector('.dice');
init();

//click Roll Dice
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //make random number for dice
        var dice = Math.floor(Math.random() * 6) + 1;
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //active player can roll dice until dice isn't 1
        if (dice !== 1) {
            //update Roundscore
            roundScore += dice;
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
    diceDOM.style.display = 'none';

}

function nextPlayer() {
    roundScore = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';
}
