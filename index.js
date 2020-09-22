var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
console.log("Player 1 ->"+" "+randomNumber1);

var x1 = document.querySelector(".img1");
if (randomNumber1 === 1){
    x1.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2){
    x1.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3){
    x1.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4){
    x1.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5){
    x1.setAttribute("src", "images/dice5.png");
} else if (randomNumber1 === 6){
    x1.setAttribute("src", "images/dice6.png");
} 

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
console.log("Player 2 ->"+" "+randomNumber2);

var x2 = document.querySelector(".img2");
if (randomNumber2 === 1){
    x2.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2){
    x2.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3){
    x2.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4){
    x2.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5){
    x2.setAttribute("src", "images/dice5.png");
} else if (randomNumber2 === 6){
    x2.setAttribute("src", "images/dice6.png");
} 

var h = document.querySelector("h1");
if (randomNumber1 === randomNumber2){
    h.innerHTML = "It's a Draw!";
} else if (randomNumber1 > randomNumber2){
    h.innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2 ){
    h.innerHTML = "Player 2 wins!";
}