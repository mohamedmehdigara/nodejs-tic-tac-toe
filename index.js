const readline = require('readline-sync');
const TicTacToe = require('./tic-tac-toe');

const game = new TicTacToe();

function printBoard() {
  console.clear();
  console.log(game.board.slice(0, 3).join(' | '));
  console.log('--+---+--');
  console.log(game.board.slice(3, 6).join(' | '));
  console.log('--+---+--');
  console.log(game.board.slice(6).join(' | '));
}

function main() {
  while (true) {
    printBoard();
    const position = readline.question(`Player ${game.currentPlayer}, enter a position (1-9): `);

    if (position >= 1 && position <= 9) {
      if (game.makeMove(position - 1)) {
        const winner = game.checkWinner();
        if (winner) {
          printBoard();
          if (winner === 'tie') {
            console.log('It\'s a tie!');
          } else {
            console.log(`Player ${winner} wins!`);
          }
          break;
        }
      } else {
        console.log('Invalid move. Try again.');
      }
    } else {
      console.log('Invalid input. Enter a number between 1 and 9.');
    }
  }
}

main();
