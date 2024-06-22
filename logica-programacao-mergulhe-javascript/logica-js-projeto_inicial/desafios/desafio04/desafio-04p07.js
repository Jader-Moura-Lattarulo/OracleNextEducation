let idade = parseInt(prompt("Qual a sua idade? (apenas números)"));

let maiorMenor = idade >= 18 ? "maior" : "menor";
let anoAnos = idade == 1 ? "ano" : "anos";
alert(`A maior idade no Brasil é considerada a partir dos 18 anos, portanto ${idade} ${anoAnos} é ${maiorMenor} de idade.`);