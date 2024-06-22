let gamePoints = parseInt(prompt("Quantos pontos você fez?"));

if (gamePoints >= 100) {
    alert(`Parabéns a pontuação ${gamePoints} é maior que 100! Você venceu!`);
} else {
    alert(`Que pena a pontuação ${gamePoints} é menor que 100! Você perdeu =[`);
}