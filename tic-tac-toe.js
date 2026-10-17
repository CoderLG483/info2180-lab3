window.addEventListener('DOMContentLoaded', () => {
    const ticBoard = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    const winCombo = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let gameStatus = Array(9).fill(null);

    function didYouWin() {
        for (let i = 0; i < winCombo.length; i++) {
            const [a, b, c] = winCombo[i];
            if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
                return true;
            }
        }
        return false;
    }

    ticBoard.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            square.classList.add('hover');
        });

        square.addEventListener('mouseout', () => {
            square.classList.remove('hover');
        });

        square.addEventListener('click', () => {
            // Update the board array at this square's index
            gameStatus[index] = currentPlayer;

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (didYouWin()) {
                const divStatus = document.querySelector('#status');
                divStatus.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                divStatus.classList.add('you-won');
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});