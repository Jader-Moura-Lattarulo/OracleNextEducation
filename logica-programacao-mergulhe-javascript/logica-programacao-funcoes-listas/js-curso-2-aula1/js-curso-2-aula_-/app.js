function showTextOnScren (tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

showTextOnScren("h1", "Jogo do Nº Secreto");
showTextOnScren("p", "Escolha um nº entre 1 e 10:");

function checkKick(){
    console.log("O botão foi clicado");
}