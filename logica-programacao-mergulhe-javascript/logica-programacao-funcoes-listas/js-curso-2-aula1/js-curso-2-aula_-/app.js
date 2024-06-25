let drawnNumbersList = [];
let limitNumber = 10;
let secretNumber = generateRandomNumber();
let attempts = 1;

function showTextOnScreen (tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}
function showInitialMsg() {
    showTextOnScreen("h1", "Jogo do Nº Secreto 2.0");
    showTextOnScreen("p", "Escolha um nº entre 1 e 10:");    
}

showInitialMsg();

function checkGuess(){
    let guess = document.querySelector("input").value;
    
    if ( guess == secretNumber){
        showTextOnScreen("h1", "Parabéns!");
        let wordAttempt = attempts == 1 ? "tentativa" : "tentativas";
        let msgAttempts = `Você descobriu o número secreto (${secretNumber}) com ${attempts} ${wordAttempt}!`;
        showTextOnScreen("p",`${msgAttempts}`);
        cleanInput();
        document.getElementById("restart").removeAttribute("disabled");
    } else {
        showTextOnScreen("h1", "Errou!");
        let wordBiggerLower = guess > secretNumber ? "menor" : "maior";
        let msgBiggerLower = `O número secreto é ${wordBiggerLower} do que ${guess}`;
        showTextOnScreen("p",`${msgBiggerLower}`);
        
        attempts++;
        cleanInput();
    }
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let numberOfNumbersInTheList = drawnNumbersList.length;

    if (numberOfNumbersInTheList == limitNumber){
        drawnNumbersList = [];
    }

    if (drawnNumbersList.includes(chosenNumber)) {
        return generateRandomNumber();
    } else {
        drawnNumbersList.push(chosenNumber);
        return chosenNumber;
    }
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