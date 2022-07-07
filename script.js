const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');

const film = 11
const levels = ['easy', 'medium', 'hard'];

function addGenre() {
    const column = document.createElement('div')
    column.classList.add('genre-column')
    column.innerHTML = 'this is a game'
    game.append(column)

    levels.forEach(level => {
        fetch(`https://opentdb.com/api.php?amount=1&category=11&difficulty=${level}&type=boolean`)
    })
}
