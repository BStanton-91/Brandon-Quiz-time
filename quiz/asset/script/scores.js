var printHighScores = function() {
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

var listEl = document.querySelector('#highscores');

    for(var i = 0; i < highscores.length; i++) {
        var liTag = document.createElement('li');
        liTag.textContent = highscores[i].initials + ' ' + highscores[i].score;
        listEl.appendChild(liTag);
    }
};

printHighScores();