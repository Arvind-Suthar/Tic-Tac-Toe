
//Store the board position as an array
var board = ["X","","","","","","","",""];


//Play a move when user clicks on a square
$(".col").click(function(){
    var clickSquare = $(this).attr("id");
    clickSquare = parseInt(clickSquare);


    //Check if position is empty
    if(board[clickSquare] == ""){

        //Update board for the move played
        board[clickSquare] = "O";

        //Update DOM
        $(this).html("O");

        //Check if position is terminal
        update(checkWin(board));
        //checkWin(board);

        //if human isnt winner or game is not drawn then call the AI player to play
        if(checkWin(board) != "O" && checkWin(board) != 0){
            computerMove(board);
        }
    }
});



//Description: Loops through the possible and gets score by minimax function
//             Plays the move with the best score
//@Params: Array containing values of squares on board
const computerMove = (board) => {

    //Get all possible moves in current board
    let allPossibleMoves = getPossibleMoves(board);

    //initialize best score with a very low value, not possible in-game
    let positionScore = 9999;

    //initialize best move with next available spot (it will be overwritten)
    let bestMove = allPossibleMoves[0];

    //loop through the possible move and calculate the score by minimax
    allPossibleMoves.forEach(elem => {
        board[elem] = "X";
        let score = minimax(board, true, 0);
        board[elem] = "";
        if(score < positionScore){
            positionScore = score;
            bestMove = elem;
        }
    });

    //play the move with the best score
    board[bestMove] = "X";
    $("#" + bestMove).html("X");
    //change req
    update(checkWin(board));
}



//Description: Returns all the possible moves in the current board position
//@Params: Array containing values of squares on board
const getPossibleMoves = (board) => {

    //initialize an empty array
    let emptySquareArray = [];

    //Loop through all square to check if they are available
    //Add them to array if they are available
    for(let i = 0; i < board.length; i++){
        if(board[i] == ""){
            emptySquareArray.push(i);
        }
    }

    //return the array of possible moves
    return emptySquareArray;
}



function update(winner){
        //Give a message if any player has won or it is a draw
        if(winner === "X"){
            $(".text").html("You won the game!");
        }else if(winner === "O"){
            $(".text").html("AI player won the game!");
        }else if(winner === 0){
            $(".text").html("It is a draw");
        }else{
            $(".text").html("Your turn");
        }
}


//computerMove(board);