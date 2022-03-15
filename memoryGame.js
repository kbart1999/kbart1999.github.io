document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'spotify',
            img: 'images/spotify.png'
        },
        {
            name: 'spotify',
            img: 'images/spotify.png'
        },
        {
            name: 'soundcloud',
            img: 'images/soundcloud.png'
        },
        {
            name: 'soundcloud',
            img: 'images/soundcloud.png'
        },
        {
            name: 'shazam',
            img: 'images/shazam.png'
        },
        {
            name: 'shazam',
            img: 'images/shazam.png'
        },
        {
            name: 'pandora',
            img: 'images/pandora.png'
        },
        {
            name: 'pandora',
            img: 'images/pandora.png'
        },
        {
            name: 'dot',
            img: 'images/dot.png'
        },
        {
            name: 'dot',
            img: 'images/dot.png'
        },
        {
            name: 'youtube',
            img: 'images/youtube.png'
        },
        {
            name: 'youtube',
            img: 'images/youtube.png'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] == cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }

    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()

})