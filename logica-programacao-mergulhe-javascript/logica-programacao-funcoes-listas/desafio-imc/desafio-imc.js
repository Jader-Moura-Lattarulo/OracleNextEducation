/*IMC = peso/(altura)² 
menor que 18,5 - Baixo peso
de 18,5 até 24,99 - Normal
de 25 até 29,99 - Sobrepeso
maior que 30 - Obesidade*/

function showResultOnScreen (id, text){
    let field = document.getElementById(id);
    field.innerHTML = text;
}
function showInitialMsg(){
    showResultOnScreen("resultTxt", `Preencha os campos e clique em "Calcular" para verificar seu IMC.`);
    showResultOnScreen("newCalculationTxt", ``);
}

showInitialMsg();

function bodyMassIndex(){
    let weight = parseFloat(document.querySelector("#get_weight").value);
    let height = parseFloat(document.querySelector("#get_height").value);
    
    let bodyMassIndex = (weight/Math.pow(height,2)).toFixed(2);
    
    if (bodyMassIndex >= 18.51 && bodyMassIndex <= 24.99) {
        //normal
        showResultOnScreen("resultTxt",`Seu IMC está em ${bodyMassIndex}, e é considerado normal, não tem com o que se preocupar.`); 
    } else {
        //Baixo, Sobrepeso, Obesidade
        let wordLowOverweightObesity = bodyMassIndex <= 18.5 ? "baixo" : bodyMassIndex >= 25 && bodyMassIndex <= 29.99 ? "sobrepeso" : "obesidade";
        let msgLowOverweightObesity = `Seu IMC está em ${bodyMassIndex} e é considerado ${wordLowOverweightObesity}, procure um profissional da saúde para saber o melhor tratatemto.`;
        showResultOnScreen("resultTxt", msgLowOverweightObesity);
    }
    showResultOnScreen("newCalculationTxt", `Clique em "Novo Cálculo" para um novo cálculo de IMC.`);
    document.getElementById("newCalculation").removeAttribute("disabled");
}

function cleanInput(){
    weight = document.querySelector("#get_weight");
    weight.value ="";
    height = document.querySelector("#get_height");
    height.value ="";
}

function newCalculation(){
    cleanInput();
    showInitialMsg();
    document.getElementById("newCalculation").setAttribute("disabled",true);
}