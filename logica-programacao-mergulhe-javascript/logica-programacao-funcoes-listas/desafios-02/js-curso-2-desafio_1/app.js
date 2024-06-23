let title = document.querySelector('h1');

title.innerHTML = "Hora do Desafio";

function checkConsole() {
    console.log("O botão console foi clicado");
}

function alertLove() {
    alert("Eu amo JS");
}

function iRemembered() {
    let city = prompt("Diga o nome de uma cidade:");
    alert(`Estive em ${city} e lembrei de você!`);
}

function sum() {
    let number01 = parseInt(prompt("Diga o primeiro número que quer somar"));
    let number02 = parseInt(prompt("Diga o segundo número que quer somar"));
    let result = number01 + number02;
    alert(`A soma entre ${number01} e ${number02} é ${result}.`)
}