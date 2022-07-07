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
        const card = document.createElement('div')
        card.classList.add('card')
        column.append(card)

        if (level === 'easy') {
            card.innerHTML = 100
        }
        if (level === 'medium') {
            card.innerHTML = 200
        }
        if (level === 'hard'){
            card.innerHTML = 300
        }

        fetch(`https://opentdb.com/api.php?amount=1&category=11&difficulty=${level}&type=boolean`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            card.setAttribute('data-question', data.results[0].question)
            card.setAttribute('data-answer', data.results[0].correct_answer)
        })
    })

}

addGenre()