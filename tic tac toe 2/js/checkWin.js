
//All the possible winning combinations for both palyers
const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


//Description: Check the board if any player has won the game
//@Params: Array containing values of squares on board
const checkWin = (board) => {

    //initialize a winnner variable
    let winner = "none";

    //go through all winning positions and checking for a winner
    //if true: update the winner variable to return the winner
    for(let i = 0; i < winningPosition.length; i++){
        if(board[winningPosition[i][0]] == "X" && board[winningPosition[i][1]] == "X" && board[winningPosition[i][2]] == "X"){
            winner = "X"
        }else if(board[winningPosition[i][0]] == "O" && board[winningPosition[i][1]] == "O" && board[winningPosition[i][2]] == "O"){
            winner = "O";
        }
    }

    //If no winner is found in above state, then check for a draw
    if(winner == "none"){
        let emptySquares = 0;
        for(let j = 0; j < 9; j++){
            if(board[j] == ""){
                emptySquares += 1;
            }
        }
        if(emptySquares == 0){
            winner = 0;
        }
    }



    //returns: "X" is human wins
    //         "O" if AI wins
    //          0  if draw 
    return winner;
}