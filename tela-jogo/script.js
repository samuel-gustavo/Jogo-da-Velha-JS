var namePlayer1 = sessionStorage.getItem("1");
var namePlayer2 = sessionStorage.getItem("2");
var nameWinner;
const namePlayer = document.getElementById("nome-jgrs");
const currentPlayer = document.querySelector(".currentPlayer");

var contador;
let selected;
let player = "X";

let positions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function init() {
    selected = [];
    player = "X";
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
    namePlayer.innerHTML = `Player: ${namePlayer1}`;
    contador = 2;
}

init();

function newMove(e) {
    const index = e.target.getAttribute("data-i");
    const btn = document.getElementById(index);
    e.target.innerHTML = player;
    e.target.removeEventListener("click", newMove);
    selected[index] = player;

    setTimeout(() => {
        check();
    }, [100]);

    player = player === "X" ? "O" : "X";

    // Cor btn
    if(player == "X") {
        btn.style.color = "orange";
    } else {
        btn.style.color = "blue";
    }
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
    mudancaNomeJogador();
}

function check() {
    let playerLastMove = player === "X" ? "O" : "X";

    const items = selected.map((item, i) => [item, i]).filter((item) => item[0] === playerLastMove).map((item) => item[1]);
    
    for(pos of positions) {
        if(pos.every((item) => items.includes(item))){
            alert("O JOGADOR " + nameWinner + " GANHOU!");
            init();
            return;
        }
    }

    if(selected.filter((item) => item).length === 9) {
        alert("DEU EMPATE!");
        init();
        return;
    }
}

function mudancaNomeJogador() {
    if(contador % 2 == 0) {
        namePlayer.innerHTML = `Player: ${namePlayer2}`;
        nameWinner = namePlayer1;
    } else {
        namePlayer.innerHTML = `Player: ${namePlayer1}`;
        nameWinner = namePlayer2;
    } 
    contador++;
}