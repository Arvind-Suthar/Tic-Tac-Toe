const minimax = (board, maximising, depth, alpha, beta) => {
  if (isTerminalState(board)) {
    if (checkWin(board) == "X") {
      return -10;
    } else if (checkWin(board) == "O") {
      return 10;
    } else if (checkWin(board) == 0) {
      return 0;
    } else {
      console.log("Not terminal");
    }
  } else {
    if (maximising) {
      //Get all possible moves in current board
      let allPossibleMoves = getPossibleMoves(board);

      //initialize best score with a very low value, not possible in-game
      let positionScore = -Infinity;

      //loop through the possible move and calculate the score by minimax
      for (let i = 0; i < allPossibleMoves.length; i++) {
        let elem = allPossibleMoves[i];

        //calculate score of the possible moves with recursion
        board[elem] = "O";
        let score = minimax(board, false, depth + 1, alpha, beta);
        board[elem] = "";

        //update the best score guaranteed
        positionScore = Math.max(positionScore, score);
        alpha = Math.max(alpha, positionScore);
        if (beta <= alpha) {
          break; //beta cutoff
        }
      }
      return positionScore;
    }

    if (!maximising) {
      //Get all possible moves in current board
      let allPossibleMoves = getPossibleMoves(board);

      //initialize best score with a very low value, not possible in-game
      let positionScore = Infinity;

      //loop through the possible move and calculate the score by minimax
      for (let i = 0; i < allPossibleMoves.length; i++) {
        let elem = allPossibleMoves[i];

        //calculate score of the possible moves with recursion
        board[elem] = "X";
        let score = minimax(board, true, depth + 1, alpha, beta);
        board[elem] = "";

        //update the best score guaranteed
        positionScore = Math.min(positionScore, score);
        beta = Math.min(beta, positionScore);
        if (beta <= alpha) {
          break; //alpha cutoff
        }
      }
      return positionScore;
    }
  }
};

//check if the current position is a terminal state of the game
const isTerminalState = (board) => {
  let winningPlayer = checkWin(board);

  if (winningPlayer == "none") {
    $(".text").html("Your turn");
    return false;
  } else {
    $(".text").html("Your turn");
    return true;
  }
};
