class TicTacToe {
    constructor() {
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
    }
  
    makeMove(position) {
      if (this.board[position] === null) {
        this.board[position] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        return true;
      }
      return false;
    }
  
    checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          return this.board[a];
        }
      }
  
      if (!this.board.includes(null)) {
        return 'tie';
      }
  
      return null;
    }
  }
  
  module.exports = TicTacToe;
  