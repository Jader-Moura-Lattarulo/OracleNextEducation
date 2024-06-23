function helloWorld() {
    console.log("Hello, world!");
}

helloWorld();

function helloName(){
    let nameInput = document.querySelector("input");
    let name = nameInput.value;
    return alert(`Olá, ${name}!`);
}

