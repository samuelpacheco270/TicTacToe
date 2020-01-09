
let player = "O";
let turnsTaken = 0;
let gameIsOver = false;

function changePlayers() {
    turnsTaken = turnsTaken + 1;
    if (player === "X") {
        player = "O";
    } else if (player === "O") {
        player = "X";
    }
}

function tieGame() {
    if (turnsTaken > 8 && gameIsOver === false) {
        $("h1").text("It's a draw!");
        gameIsOver = true;
    }
}
function checkEqualValues(tile1, tile2, tile3){
    console.log($(tile1).val())
    console.log($(tile2).val())
    console.log($(tile3).val())

   return $(tile1).text() === $(tile2).text() && $(tile2).text()===$(tile3).text()
}

function CheckVerticalWins(){
   return  checkEqualValues(`#tile1`,`#tile4`, `#tile7`) || checkEqualValues(`#tile2`,`#tile5`, `#tile8`) || checkEqualValues(`#tile3`,`#tile6`, `#tile9`)
}
function CheckHorizontalWins() {
return false
}
function CheckDiagonalWins() {
return false
}
function CheckWin () {
    return CheckVerticalWins() || CheckHorizontalWins() || CheckDiagonalWins()
}
function performLogic(button,tile) {
    $(button).hide();
    $(tile).html(player);
    changePlayers();
    tieGame()

    if ( CheckWin()) {
        $("h1").text(player + `Wins!`);
        gameIsOver = true
    }
}

$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});
 
$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

