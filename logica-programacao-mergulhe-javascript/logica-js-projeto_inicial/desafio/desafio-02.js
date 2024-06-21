let dayOfWeek = prompt("Que dia da semana é hoje?")

if (dayOfWeek == "Sábado" || dayOfWeek == "Domingo"){
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

let userNumber = parseInt(prompt("Digite um número para verificar se é negativo ou positivo"));

if (userNumber > 0) {
    alert(`O número ${userNumber} é positivo!`);
} else {
    alert(`O número ${userNumber} é negativo!`);
}