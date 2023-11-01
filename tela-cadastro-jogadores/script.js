var namePlayer1;
var namePlayer2;
var StatePlayer1 = false;
var StatePlayer2 = false;
const fieldNamePlayer1 = document.getElementById("name1");
const fieldNamePlayer2 = document.getElementById("name2");
// const btnConfirmPlayer1 = document.getElementById("btn-confirm-player1");
// const btnConfirmPlayer2 = document.getElementById("btn-confirm-player2");
const controlStatePlayer1 = document.getElementById("resposta-jgrs-player-1");
const controlStatePlayer2 = document.getElementById("resposta-jgrs-player-2");
const btnReadyPlayer1 = document.getElementById("btn-confirm-player1");
const btnReadyPlayer2 = document.getElementById("btn-confirm-player2");
const btnCancelPlayer1 = document.getElementById("btn-cancel-player1");
const btnCancelPlayer2 = document.getElementById("btn-cancel-player2");
const btnPlay = document.getElementById("btn-start");

function init() {
    fieldNamePlayer1.nnerHTML = "";
    fieldNamePlayer2.innerHTML = "";
    btnCancelPlayer1.hidden = true;
    btnCancelPlayer2.hidden = true;
    btnPlay.hidden = true;
}

init();

function clickStateReady1() {
    namePlayer1 = document.getElementById("name1").value;
    sessionStorage.setItem("1", namePlayer1);
    controlStatePlayer1.innerHTML = "PRONTO!";
    btnReadyPlayer1.hidden = true;
    btnCancelPlayer1.hidden = false;
    StatePlayer1 = true;
    btnStartGame();
}

function clickStateReady2() {
    namePlayer2 = document.getElementById("name2").value;
    sessionStorage.setItem("2", namePlayer2);
    controlStatePlayer2.innerHTML = "PRONTO!";
    btnReadyPlayer2.hidden = true;
    btnCancelPlayer2.hidden = false;
    StatePlayer2 = true;
    btnStartGame();
}

function clickCancel1() {
    controlStatePlayer1.innerHTML = "AGUARDANDO...";
    btnReadyPlayer1.hidden = false;
    btnCancelPlayer1.hidden = true;
    StatePlayer1 = false;
    btnStartGame();
}

function clickCancel2() {
    controlStatePlayer2.innerHTML = "AGUARDANDO...";
    btnReadyPlayer2.hidden = false;
    btnCancelPlayer2.hidden = true;
    StatePlayer2 = false;
    btnStartGame();
}

function btnStartGame() {
    if(StatePlayer1 && StatePlayer2){
        btnPlay.hidden = false;
        console.log("Deu certo!")
    } else {
        btnPlay.hidden = true;
    }
}