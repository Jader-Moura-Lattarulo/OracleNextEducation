alert("Boas vindas ao nosso site!");

 nome = prompt("Qual é o seu nome?");
 idade = prompt("Qual é a sua idade?");
 idade = Number(idade);

if (idade >= 18) {
    alert("Pode tirar a habilitação!");
} else {
    alert("Não pode tirar a habilitação!")
}