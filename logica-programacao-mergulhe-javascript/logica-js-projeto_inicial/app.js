alert("Boas vindas ao jogo do número secreto");
let secretNumber = 29;
let userGuess = null;

//loop enquanto o chute não for igual ao número secreto
while (userGuess != secretNumber){
    userGuess = prompt("Escolha um número entre 1 e 30: ");
    //se o chute for igual ao número secreto
    if (userGuess == secretNumber) {
        alert(`Isso aí! Você descobriu o número secreto (${secretNumber})!`);
    } else {
        if (userGuess > secretNumber) {
            alert(`O número secreto é menor que ${userGuess}`);
        } else {
            alert(`O número secreto é maior que ${userGuess}`);
        }
    }
}
