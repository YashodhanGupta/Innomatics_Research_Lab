const symbols = ['🎃', '👻', '🕸️', '🦇', '🍬', '🎯', '🚀', '🌌'];
        let cardsArray = [...symbols, ...symbols];
        let hasFlippedCard = false;
        let lockBoard = false;
        let firstCard, secondCard;
        let matches = 0;
        let timeLeft = 60;
        let timer;

        const gameBoard = document.getElementById('gameBoard');

        function shuffleCards() {
            cardsArray.sort(() => 0.5 - Math.random());
        }

        function createCard(symbol) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="front">${symbol}</div>
                <div class="back">❓</div>
            `;
            card.addEventListener('click', flipCard);
            card.dataset.symbol = symbol;
            gameBoard.appendChild(card);
        }

        function initializeGame() {
            gameBoard.innerHTML = '';
            shuffleCards();
            cardsArray.forEach(createCard);
            matches = 0;
            timeLeft = 60;
            document.getElementById('message').textContent = 'Memory Game';
            document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
            clearInterval(timer);
            timer = setInterval(() => {
                timeLeft--;
                document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
                if (timeLeft === 0) {
                    clearInterval(timer);
                    document.getElementById('message').textContent = `Time's up! Your score: ${matches}`;
                    document.querySelectorAll('.card').forEach(card => card.removeEventListener('click', flipCard));
                }
            }, 1000);
        }

        function flipCard() {
            if (lockBoard || this === firstCard) return;
            this.classList.add('flip');
            if (!hasFlippedCard) {
                hasFlippedCard = true;
                firstCard = this;
                return;
            }
            secondCard = this;
            checkForMatch();
        }

        function checkForMatch() {
            let isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;
            if (isMatch) {
                disableCards();
                matches++;
                if (matches === symbols.length) {
                    clearInterval(timer);
                    document.getElementById('message').textContent = `You Win! Score: ${matches}`;
                }
            } else {
                unflipCards();
            }
        }

        function disableCards() {
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            resetBoard();
        }

        function unflipCards() {
            lockBoard = true;
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard();
            }, 1000);
        }

        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }

        function resetGame() {
            initializeGame();
        }

        initializeGame();