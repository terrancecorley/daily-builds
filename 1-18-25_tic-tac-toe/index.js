(function() {
    // first user is X (blue), second user is O (red)
    // on click event within div triggers bgc to change to either blue or red
    // logic to check if user can click in the square or if there is a winner
    let player = 1;
    let gridSquares = new Set();
    
    function handleGridClick(e, gridSquares) {
        // grab current mouse position, check if position has already been clicked
        // if has been clicked, do nothing, if not, color with the appropiate color and check if winner
        console.log('playerrr: ', player )
        if (gridSquares.has(e.target.className)) {
            return;
        } else {
            gridSquares.add(e.target.className);
            e.target.style.backgroundColor = player === 1 ? 'blue' : 'red';
            player = player === 1 ? 2 : 1;
        }
    }

    let grid = document.getElementById('grid');
    grid.addEventListener('click', (e) => {
        handleGridClick(e, gridSquares);
    });
})();