let numero = prompt("Insira um valor para descobrir se é positivo ou negativo:");

if (numero > 0){
    alert(`O número ${numero} é positivo.`);
} else if (numero < 0) {
    alert(`O número ${numero} é negativo.`);
} else {
    alert(`O número ${numero} é neutro.`);
}