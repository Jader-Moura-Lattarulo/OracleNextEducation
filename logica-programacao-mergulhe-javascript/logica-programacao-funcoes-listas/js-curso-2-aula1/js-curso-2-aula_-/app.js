let secretNumber = generateRandomNumber();

function showTextOnScren (tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

showTextOnScren("h1", "Jogo do Nº Secreto 2.0");
showTextOnScren("p", "Escolha um nº entre 1 e 10:");

function checkGuess(){
    let guess = document.querySelector("input").value;
    console.log(guess == secretNumber);
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}