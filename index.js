document.querySelector(".name").addEventListener("click", askName);

function askName() {
    const player1name = prompt("Player 1");
    document.querySelector('.player1name').innerHTML = player1name;

    const player2name = prompt("Player 2");
    document.querySelector('.player2name').innerHTML = player2name;

    roll(player1name, player2name);

}

document.querySelector("#roll").addEventListener("click", roll);


let score1 = [];
let totalScore1 = 0;
let score2 = [];
let totalScore2 = 0;
var count = 0;

// function reset(){
//     var randomNumber1 = '';

// }


function roll() {

    count += 1;
    if(count == 5){

        if (totalScore1 > totalScore2) {
            document.querySelector("h1").innerHTML = "🚩 Play " + player1name + " Wins!";
          } else if (totalScore2 > totalScore1) {
            document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
          } else {
            document.querySelector("h1").innerHTML = "Draw!";
          }

    }if(count > 5) {
        alert("game over");
        return;
    }

    // let images = ["https://cdn-icons-png.flaticon.com/512/1803/1803495.png", "https://cdn-icons-png.flaticon.com/512/8286/8286876.png", "https://cdn-icons-png.flaticon.com/512/8336/8336955.png", "https://cdn-icons-png.flaticon.com/512/8336/8336933.png","https://cdn-icons-png.flaticon.com/512/8336/8336931.png","https://cdn-icons-png.flaticon.com/512/8336/8336948.png"]

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    
    var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
    // let randomImageSource = images[randomNumber1];
    
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
    
    score1.push(randomNumber1);
    totalScore1 += randomNumber1;
    document.querySelector(".score1").innerHTML = score1;
    document.querySelector(".total-score1").innerHTML = totalScore1;



    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    // let randomImageSource2 = images[randomNumber2];


    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    score2.push(randomNumber2);
    totalScore2 += randomNumber2;
    document.querySelector(".score2").innerHTML = score2;
    document.querySelector(".total-score2").innerHTML = totalScore2;

}
