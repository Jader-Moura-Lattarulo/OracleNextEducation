let secretNumber = generateRandomNumber();
let attempts = 1;

function showTextOnScren (tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

showTextOnScren("h1", "Jogo do Nº Secreto 2.0");
showTextOnScren("p", "Escolha um nº entre 1 e 10:");

function checkGuess(){
    let guess = document.querySelector("input").value;
    
    if ( guess == secretNumber){
        showTextOnScren("h1", "Parabéns!");
        let wordAttempt = attempts == 1 ? "tentativa" : "tentativas";
        let msgAttempts = `Você descobriu o número secreto com ${attempts} ${wordAttempt}!`;
        showTextOnScren("p",`${msgAttempts}`);
    } else {
        showTextOnScren("h1", "Errou!");
        if (guess > secretNumber) {
            showTextOnScren("p",`O número secreto é menor do que ${guess}`);
        } else {
            showTextOnScren("p",`O número secreto é maior do que ${guess}`);
        }
        attempts++
    }
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}