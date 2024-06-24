let secretNumber = generateRandomNumber();
let attempts = 1;

function showTextOnScren (tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}
function showInitialMsg() {
    showTextOnScren("h1", "Jogo do Nº Secreto 2.0");
    showTextOnScren("p", "Escolha um nº entre 1 e 10:");    
}

showInitialMsg();

function checkGuess(){
    let guess = document.querySelector("input").value;
    
    if ( guess == secretNumber){
        showTextOnScren("h1", "Parabéns!");
        let wordAttempt = attempts == 1 ? "tentativa" : "tentativas";
        let msgAttempts = `Você descobriu o número secreto (${secretNumber}) com ${attempts} ${wordAttempt}!`;
        showTextOnScren("p",`${msgAttempts}`);
        cleanInput();
        document.getElementById("restart").removeAttribute("disabled");
    } else {
        showTextOnScren("h1", "Errou!");
        let wordBiggerLower = guess > secretNumber ? "menor" : "maior";
        let msgBiggerLower = `O número secreto é ${wordBiggerLower} do que ${guess}`;
        showTextOnScren("p",`${msgBiggerLower}`);
        
        attempts++;
        cleanInput();
    }
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10 + 1);
}

function cleanInput(){
    guess = document.querySelector("input");
    guess.value = "";
}

function restartGame() {
    secretNumber = generateRandomNumber();
    cleanInput();
    attempts = 1;
    showInitialMsg();
    document.getElementById("restart").setAttribute("disabled",true);
}