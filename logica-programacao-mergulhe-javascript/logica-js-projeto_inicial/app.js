alert("Boas vindas ao jogo do número secreto");
let secretNumber = 29;
let userGuess = prompt("Escolha um número entre 1 e 30: ");

if (userGuess == secretNumber) {
    console.log("Isso aí! Você descobriu o número secreto!");
}