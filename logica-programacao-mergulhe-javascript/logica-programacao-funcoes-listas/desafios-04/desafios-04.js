/*IMC = peso/(altura)² 
menor que 18,5 - Baixo peso
de 18,5 até 24,99 - Normal
de 25 até 29,99 - Sobrepeso
maior que 30 - Obesidade*/

function showResultOnScreen (tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}
function showInitialMsg(){
    showResultOnScreen("p", "Verifique acima seu IMC.");
}

showInitialMsg();

function bodyMassIndex(){
    let weight = parseFloat(document.querySelector("#get_weight").value);
    let height = parseFloat(document.querySelector("#get_height").value);
    
    let bodyMassIndex = weight/Math.pow(height,2);
    
    if (bodyMassIndex >= 18.51 && bodyMassIndex <= 24.99) {
        //normal
        showResultOnScreen("p",`Seu IMC está em ${bodyMassIndex}, e é considerado normal, não tem com o que se preocupar.`);      
    } else {
        //Baixo, Sobrepeso, Obesidade
        let wordLowOverweightObesity = bodyMassIndex <= 18.5 ? "baixo" : bodyMassIndex >= 25 && bodyMassIndex <= 29.99 ? "sobrepeso" : "obesidade";
        let msgLowOverweightObesity = `Seu IMC está em ${bodyMassIndex} e é considerado ${wordLowOverweightObesity}, procure um profissional da saúde para saber o melhor tratatemto.`;
        showResultOnScreen("p", msgLowOverweightObesity);
    }
}
