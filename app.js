var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");
var box12 = document.querySelector("#box12");
var box13 = document.querySelector("#box13");
var box14 = document.querySelector("#box14");
var box15 = document.querySelector("#box15");
var box16 = document.querySelector("#box16");

var board = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
var arrdiv = [box1, box2, box3, box4, box8, box12, box16, box15, box14, box13, box9, box5];

console.log(board);

const player1_button = document.getElementById("player1");
const player2_button = document.getElementById("player2");

// console.log(player1_button);

player1_button.addEventListener('click', roll_dice1);
player2_button.addEventListener('click', roll_dice2);

var player1 = ['Player1', 0, 1000];
var player2 = ['Player2', 0, 1000];

function roll_dice1() {
    let position = Math.floor(Math.random() * 6) + 1;
    changePosition_1(player1[1], position);
}

var count = 0;

function changePosition_1(old, currPos) {
    count++;
    var newPos = old + currPos;
    player1[1] = newPos;
    newPos = newPos % 11;

    //Change imgPOS
    var img = document.getElementById('img1');
    img.style.visibility = 'hidden';
    console.log('Count: ' + count);
    if (count > 1) {
        var elem = document.getElementById('img1');
        elem.remove();
    }
    let template = '<img src="images\img1.jpg" id="img1" alt="p1" style="width:36px;height:40px" />';
    arrdiv[newPos].innerHTML += template;
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney = 0;
    if (p1 < board.length) {
        updateMoney = player1[2] - board[p1 - 1];
    } else {
        p1 = p1 % 15;
        updateMoney = player1[2] - board[p1 - 1];
    }
    console.log("Player1 has: " + updateMoney + "rs");
}

/*Player2 Functions*/

function roll_dice2() {
    let position = Math.floor(Math.random() * 6) + 1;
    changePosition_2(player2[1], position);
}

var count2 = 0;

function changePosition_2(old, currPos) {
    var newPos = old + currPos;
    player2[1] = newPos;
    newPos = newPos % 11;

    var img = document.getElementById('img2');
    img.style.visibility = 'hidden';
    console.log('Count: ' + count2);
    if (count2 > 1) {
        var elem = document.getElementById('img2');
        elem.remove();
    }
    let template = '<img src="images\img1.jpg" id="img2" alt="p1" style="width:36px;height:40px" />';
    arrdiv[newPos].innerHTML += template;

    updateMoney_2(player2[1]);
}

function updateMoney_2(p2) {
    var updateMoney = 0;
    if (p2 < board.length) {
        updateMoney = player2[2] - board[p2 - 1];
    } else {
        p2 = p2 % 15;
        updateMoney = player2[2] - board[p2 - 1];
    }
    console.log("Player2 has: " + updateMoney + "rs");
}