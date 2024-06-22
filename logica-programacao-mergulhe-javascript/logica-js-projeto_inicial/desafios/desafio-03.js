let cont = 1;

while (cont <= 10) {
    alert(`contador: ${cont}`)
    cont++
}

cont = 10;

while (cont >= 0) {
    alert(`contador: ${cont}`)
    cont--
}

cont = parseInt(prompt("Qual número você quer começar a contagem regressiva?"));

while (cont >= 0) {
    console.log(`contador: ${cont}`)
    cont--
}


cont = 0;
let finalNumber = parseInt(prompt("Até qual número você quer contar?"));

while (cont <= finalNumber) {
    console.log(`contador: ${cont}`)
    cont++
}