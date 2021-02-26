

const minimax = (board, maximising, depth) => {
    if(isTerminalState(board)){
        if(checkWin(board) == "X"){
            return -10;
        }else if(checkWin(board) == "O"){
            return 10;
        }else if(checkWin(board) == 0){
            return 0;
        }else{
            console.log("Not terminal");
        }
    }else{
        if(maximising){
            //Get all possible moves in current board
            let allPossibleMoves = getPossibleMoves(board);
    
            //initialize best score with a very low value, not possible in-game
            let positionScore = -999;
    
            //loop through the possible move and calculate the score by minimax
            allPossibleMoves.forEach(elem => {
                board[elem] = "O";
                score = minimax(board, false, depth++);
                board[elem] = "";

                positionScore = Math.max(positionScore, score);
            });
            return positionScore;
        }

        if(!maximising){
            //Get all possible moves in current board
            let allPossibleMoves = getPossibleMoves(board);
    
            //initialize best score with a very low value, not possible in-game
            let positionScore = 999;
    
            //initialize best move with next available spot (it will be overwritten)
            //let bestMove = allPossibleMoves[0];
    
            //loop through the possible move and calculate the score by minimax
            allPossibleMoves.forEach(elem => {
                board[elem] = "X";
                score = minimax(board, true, depth++);
                board[elem] = "";
                positionScore = Math.min(positionScore, score);
            });
            return positionScore;
        }
    }
}


const isTerminalState = (board) => {
    let winningPlayer = checkWin(board);

    if(winningPlayer == "none"){
        $(".text").html("Your turn");
        return false;
    }else{
        $(".text").html("Your turn");
        return true;
    }
}