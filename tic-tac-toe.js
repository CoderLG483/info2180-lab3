window.addEventListener('DOMContentLoaded', () => {
    const ticBoard = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    ticBoard.forEach((square) => {
        square.classList.add('square');
        square.addEventListener('click', () => {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
    });
});