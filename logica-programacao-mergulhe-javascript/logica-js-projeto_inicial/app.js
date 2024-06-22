alert("Boas vindas ao jogo do número secreto");
let secretNumber = Math.floor(Math.random()* 30)+1;
let userGuess = null;
let attempt = 1;

//loop enquanto o chute não for igual ao número secreto
while (userGuess != secretNumber){
    userGuess = prompt("Escolha um número entre 1 e 30: ");
    //se o chute for igual ao número secreto
    if (userGuess == secretNumber) {
        break;
    } else {
        if (userGuess > secretNumber) {
            alert(`O número secreto é menor que ${userGuess}`);
        } else {
            alert(`O número secreto é maior que ${userGuess}`);
        }
        //attempt = attempt +1;
        attempt++;
    }
}

let wordAttempt = attempt == 1 ? "tentativa" : "tentativas";
alert(`Isso aí! Você descobriu o número secreto (${secretNumber}) com ${attempt} ${wordAttempt}!`);