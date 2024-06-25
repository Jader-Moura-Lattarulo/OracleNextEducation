function showTextOnScreen (id, text){
    let field = document.getElementById(id);
    field.innerHTML = text;
}

function calculateFactorial(){
    let factorialNumber = document.getElementById("get_fatorial_number");
    let number = parseInt(factorialNumber.value);
    let result = 1;
    for(let i = 1; i <= number; i++) {
        result *= i;
    }
    showTextOnScreen("factorialResultTxt", `O resultado de ${number}! é:${result}.`)
}

function cleanInput(){
    number = document.getElementById("get_fatorial_number");
    number.value = "";
    showTextOnScreen("factorialResultTxt","");
}
function resetFactorial(){
    cleanInput();
}

function calculateExchange(){
    let dolar = parseFloat(document.getElementById("get_dolar").value);
    let real = dolar * 4.80;
    showTextOnScreen("exchangeResultTxt",`$${(dolar).toFixed(2)} dolares são equivalentes a R$${(real).toFixed(2)} reais`);
}

function resetExchange(){
    number = document.getElementById("get_dolar");
    number.value = "";
    showTextOnScreen("exchangeResultTxt","");
}

function calculatePerimeter(){
    let width = parseFloat(document.getElementById("get_width").value);
    let height = parseFloat(document.getElementById("get_height").value);
    let perimeter = (width*2)+(height*2);
    showTextOnScreen("perimeterResultTxt",`O perimetro de um retangulo com a largura ${(width).toFixed(2)} e altura ${(height).toFixed(2)} é de ${(perimeter).toFixed(2)}`)
}

function resetPerimeter(){
    width = document.getElementById("get_width");
    height = document.getElementById("get_height");

    width.value = "";
    height.value = "";
    showTextOnScreen("perimeterResultTxt","");
}

/*O perímetro de um círculo de raio r é calculado por C=2⋅π⋅r.
A área de um círculo de raio r é dada por A=π⋅r2 */

function calculateAreaAndPerimeter(){
    let radius = parseFloat(document.getElementById("get_radius").value);
    let circlePerimeter = 2 * Math.PI * radius;
    let circleArea = Math.PI * Math.pow(radius,2);
    showTextOnScreen("areaAndPerimeterResultTxt", `O perimetro e a área de uma sala circular com o raio de ${(radius).toFixed(2)}m são respectivamente ${(circlePerimeter).toFixed(2)}m e ${(circleArea).toFixed(2)}m`)
}

function resetAreaAndPerimeter(){
    radius = document.getElementById("get_radius");
    radius.value = "";
    showTextOnScreen("areaAndPerimeterResultTxt","");
}

function productMultiplicationTable(){
    let factor = parseInt(document.getElementById("get_factor").value);
    var productDiv = document.getElementById("multiplicationTableResultTxt");
    
    productDiv.innerHTML = "";

    if (isNaN(factor)) {
        productDiv.innerHTML = 'Por favor, digite um número válido.';
        return;
    }

    var table = document.createElement("table");
    var header = table.insertRow();
    header.insertCell(0).innerHTML = `<b>Fator</b>`;
    header.insertCell(1).innerHTML = "";
    header.insertCell(2).innerHTML = `<b>Multiplicador</b>`;
    header.insertCell(3).innerHTML = "";
    header.insertCell(4).innerHTML = `<b>Produto</b>`;

    for (var i = 1; i <= 10; i++) {
        var line = table.insertRow();
        line.insertCell(0).innerHTML = factor;
        line.insertCell(1).innerHTML = `<span class="operation">X</span>`;
        line.insertCell(2).innerHTML = i;
        line.insertCell(3).innerHTML = `<span class="operation">=</span>`;
        line.insertCell(4).innerHTML = factor * i;
    }

    productDiv.appendChild(table);
}