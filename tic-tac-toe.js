window.addEventListener('DOMContentLoaded', () => {
    const ticBoard = document.querySelectorAll('#board div');

    ticBoard.forEach((square) => {
        square.classList.add('square');
    });
});