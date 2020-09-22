var drumButton = document.querySelectorAll(".drum");

for(var i = 0; i<drumButton.length; i++){
    drumButton[i].addEventListener("click",myEvent);
}

// Detecting key by clicking on the button
function myEvent(){
    var buttonInnerHTML = this.innerHTML;
    generateSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

// Detecting keyboard keypress
document.addEventListener("keydown", function(event){
    generateSound(event.key);
    console.log(event.key);
    buttonAnimation(event.key);
});

// Function to generate sound
function generateSound(key){
    switch (key) {
        case "w": 
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a": 
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s": 
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d": 
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j": 
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k": 
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l": 
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;            
        default:
            console.log('Invalid input ->', buttonInnerHTML);
            break;
    }
}

// Button animation

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.'+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed',100);
    });
}