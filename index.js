function startGame() {
  document.turn = "X";
  setMessage(document.turn + " gets to start!");
}

function userTurn(box) {
  if(box.innerText === '') {
    box.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("Pick another spot");
  }
}

function switchTurn() {
  if (document.turn === 'X') {
    document.turn = "O";
  } else {
    document.turn = "X";
  }
  setMessage("It's " + document.turn + "'s turn!")
}

function setMessage(message) {
  document.getElementById("message").innerText = message;
}
