let secretNumber = generateRandomNumber();

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
        showTextOnScren("p","Você descobriu o número secreto!");
    } else {
        showTextOnScren("h1", "Errou!");
        if (guess > secretNumber) {
            showTextOnScren("p",`O número secreto é menor do que ${guess}`);
        } else {
            showTextOnScren("p",`O número secreto é maior do que ${guess}`);
        }
    }
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}