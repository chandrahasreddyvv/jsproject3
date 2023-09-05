let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.random() * 100;
let randomNumberInt = Math.ceil(randomNumber);
console.log(randomNumberInt)

function checkGuess() {
    let user = parseInt(userInput.value);
    if (user < randomNumberInt) {
        gameResult.textContent = "Your Number is low";
        gameResult.style.backgroundColor = "blue";
    } else if (user > randomNumberInt) {
        gameResult.textContent = "Your Number is high";
        gameResult.style.backgroundColor = "Red";
    } else if (user === randomNumberInt) {
        gameResult.textContent = "Congrats you got it";
        gameResult.style.backgroundColor = "Green";
    }
}